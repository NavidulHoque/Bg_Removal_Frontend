/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { createContext, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { url } from "@/url";
import { Session } from "next-auth";
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'


export interface User {
    _id: string;
    email: string;
    username: string;
    password: string;
    photo: string;
    provider: string;
    creditBalance: number;
}

export interface AppContextType {
    values: {
        credits: number;
        setCredits: Dispatch<SetStateAction<number>>;
        fetchData: (session: Session) => Promise<void>;
        removeBg: (imageFile: File) => Promise<void>;
        user: User;
        image: File | null;
        bgRemovedImage: string;
    }
}


export const AppContext = createContext<AppContextType>({} as AppContextType)


export default function AppProvider({ children }: { children: React.ReactNode }) {

    const [credits, setCredits] = useState<number>(5)
    const [user, setUser] = useState<User>({} as User)
    const [image, setImage] = useState<File | null>(null)
    const [bgRemovedImage, setBgRemovedImage] = useState<string>("")

    const router = useRouter()
    const { toast } = useToast()

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

        catch (error) {

            toast({
                variant: "error",
                description: error instanceof Error && error.message
            })
        }

    }

    // const updateCreditsData = async () => {

    // }

    const removeBg = async (imageFile: File) => {

        if (credits > 0) {

            router.push("/result")

            setImage(imageFile)

            const formData = new FormData()

            formData.append("image_file", imageFile)

            try {

                const response = await axios.post('https://clipdrop-api.co/remove-background/v1', formData, {
                    headers: {
                        'x-api-key': process.env.NEXT_PUBLIC_CLIP_DROP_API_KEY,
                    },
                    responseType: "arraybuffer" // will give binary image data directly in response.data
                })

                const blob = new Blob([response.data], { type: 'image/png' });

                const imageUrl = URL.createObjectURL(blob)

                setBgRemovedImage(imageUrl)

                setCredits(prev => prev - 1)
            }

            catch {
                toast({
                    variant: "error",
                    description: "Something went wrong, please try to upload your image again"
                })
            }
        }

        else{
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
        bgRemovedImage
    }

    return (
        <AppContext.Provider value={{ values }}>
            {children}
        </AppContext.Provider>
    )

}