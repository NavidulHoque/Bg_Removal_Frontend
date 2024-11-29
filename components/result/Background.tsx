"use client"

import useImage from "@/hooks/useImage"
import Image from "next/image"
import Loader from "./Loader"

export default function Background() {

    const { values: { image } } = useImage()

    return (

        <>
            {image ? (
                <Image 
                    src={image} 
                    alt="background"
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
