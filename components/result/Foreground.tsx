"use client"

import useApp from "@/hooks/useApp"
import Image from "next/image"
import Loader from "./Loader"


export default function Foreground() {

    const { values: { bgRemovedImage } } = useApp()

    return (
        <>
            {bgRemovedImage ? (
                <Image 
                    src={bgRemovedImage} 
                    alt="foreground" 
                    fill
                    className="object-cover"
                />
            ) : (
                <Loader />
            )}
        </>
    )
}
