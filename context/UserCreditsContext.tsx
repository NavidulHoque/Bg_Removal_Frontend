/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import axios from "axios";
import { url } from "@/url";
import { Session } from "next-auth";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import { fileToBase64 } from "@/lib/utils";


export interface User {
    _id: string;
    email: string;
    username: string;
    password: string;
    photo: string;
    provider: string;
    creditBalance: number;
}

export interface UserCreditsContextType {
    values: {
        credits: number;
        setCredits: Dispatch<SetStateAction<number>>;
        fetchData: (session: Session) => Promise<void>;
        removeBg: (imageFile: File, flag: boolean) => Promise<void>;
        user: User;
        image: string;
        bgRemovedImage: string;
        setImage: Dispatch<SetStateAction<string>>;
        setBgRemovedImage: Dispatch<SetStateAction<string>>;
    }
}


export const UserCreditsContext = createContext<UserCreditsContextType>({} as UserCreditsContextType)


export default function UserCreditsProvider({ children }: { children: React.ReactNode }) {

    const [credits, setCredits] = useState<number>(5)
    const [user, setUser] = useState<User>({} as User)
    const [image, setImage] = useState<string>("")
    const [bgRemovedImage, setBgRemovedImage] = useState<string>("")


    const router = useRouter()
    const { toast } = useToast()

    useEffect(() => {

        const realImageFromLocalStorage = localStorage.getItem("realImageOfBgRemoval")
        const bgRemovedImageFromLocalStorage = localStorage.getItem("bgRemovedImageOfBgRemoval")

        if (realImageFromLocalStorage || bgRemovedImageFromLocalStorage) {

            setImage(JSON.parse(realImageFromLocalStorage ?? ""))
            setBgRemovedImage(JSON.parse(bgRemovedImageFromLocalStorage ?? ""))
        }

    }, [])


    const fetchData = async (session: Session) => {

        try {

            const response = await axios.post(url + "/user/read", {
                email: session?.user?.email,
                provider: session?.user?.provider
            })

            if (response.data.status) {
                setCredits(response.data.user.creditBalance)
                setUser(response.data.user)
            }
        }

        catch {

            toast({
                variant: "error",
                description: "Something went wrong, might be network issue, please reload the page"
            })
        }

    }

    const updateCreditsData = async () => {

        try {
            const response = await axios.put(url + "/user/updateCredits", {
                email: user.email,
                provider: user.provider,
                creditBalance: user.creditBalance
            })

            if (response.data.status) {

                setUser(response.data.user)
                setCredits(response.data.user.creditBalance)
            }
        }

        catch (error) {
            console.error(error) //nothing to do as user's objective has been achieved, what can he do if there are some server related issues
        }
    }

    const removeBg = async (imageFile: File, flag: boolean) => {

        if (credits > 0) {

            if (!flag) {
                router.push("/result")
            }

            let realImageBase64, realImageUrl

            try {
                realImageBase64 = await fileToBase64(imageFile);
                setImage(realImageBase64)
            }

            catch {

                realImageUrl = imageFile && URL.createObjectURL(imageFile)

                setImage(realImageUrl)
            }

            const formData = new FormData()

            formData.append("image_file", imageFile)

            try {

                const response = await axios.post('https://clipdrop-api.co/remove-background/v1', formData, {
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_CLIP_DROP_API_KEY,
                    },
                    responseType: "arraybuffer" // will give binary image data directly in response.data
                })

                const base64String = Buffer.from(response.data, 'binary').toString('base64')
                const base64Image = `data:image/png;base64,${base64String}`

                setBgRemovedImage(base64Image)

                localStorage.setItem("realImageOfBgRemoval", JSON.stringify(realImageBase64 || realImageUrl))
                localStorage.setItem("bgRemovedImageOfBgRemoval", JSON.stringify(base64Image))

                await updateCreditsData()
            }

            catch {
                toast({
                    variant: "error",
                    description: "Something went wrong, please try to upload your image again"
                })
            }
        }

        else {
            router.push("/buy")
        }
    }

    const values = {
        credits,
        setCredits,
        fetchData,
        removeBg,
        user,
        image,
        bgRemovedImage,
        setImage,
        setBgRemovedImage
    }

    return (
        <UserCreditsContext.Provider value={{ values }}>
            {children}
        </UserCreditsContext.Provider>
    )
}