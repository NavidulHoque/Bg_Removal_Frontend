"use client"

import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { fileToBase64 } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast"
import useUserCredits from "@/hooks/useUserCredits";

export interface ImageContextType {
    values: {
        removeBg: (imageFile: File, flag: boolean) => Promise<void>;
        image: string;
        bgRemovedImage: string;
        setImage: Dispatch<SetStateAction<string>>;
        setBgRemovedImage: Dispatch<SetStateAction<string>>;
    }
}

export const ImageContext = createContext<ImageContextType>({} as ImageContextType)

export default function ImageProvider({ children }: { children: React.ReactNode }) {

    const [image, setImage] = useState<string>("")
    const [bgRemovedImage, setBgRemovedImage] = useState<string>("")
    const { values: { credits, updateCreditsData } } = useUserCredits()

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

    const removeBg = async (imageFile: File, flag: boolean) => {

        if (credits as number <= 0) {
            router.push("/buy");
            return;
        }

        if (!flag) router.push("/result")

        try {

            const realImageBase64 = await fileToBase64(imageFile);

            setImage(realImageBase64)

            const formData = new FormData()

            formData.append("image_file", imageFile)

            const response = await axios.post('https://clipdrop-api.co/remove-background/v1', formData, {
                headers: {
                    'x-api-key': process.env.NEXT_PUBLIC_CLIP_DROP_API_KEY,
                },
                responseType: "arraybuffer" // will give binary image data directly in response.data
            })

            const base64String = Buffer.from(response.data, 'binary').toString('base64')
            const base64Image = `data:image/png;base64,${base64String}`

            setBgRemovedImage(base64Image)

            localStorage.setItem("realImageOfBgRemoval", JSON.stringify(realImageBase64))
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

    const values = {
        removeBg,
        image,
        bgRemovedImage,
        setImage,
        setBgRemovedImage
    }

    return (
        <ImageContext.Provider value={{ values }}>
            {children}
        </ImageContext.Provider>
    )

}
