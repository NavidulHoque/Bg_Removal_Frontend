"use client"

import useImage from "@/hooks/useImage"
import Image from "next/image"
import Loader from "./Loader"


export default function Foreground() {

    const { values: { bgRemovedImage } } = useImage()

    return (
        <>
            {bgRemovedImage ? (
                <Image 
                    src={bgRemovedImage} 
                    alt="foreground" 
                    width={670}
                    height={386}
                    className="object-cover"
                />
            ) : (
                <Loader />
            )}
        </>
    )
}
