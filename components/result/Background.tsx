"use client"

import useApp from "@/hooks/useApp"
import Image from "next/image"
import Loader from "./Loader"

export default function Background() {

    const { values: { image } } = useApp()

    return (

        <>
            {image ? (
                <Image 
                    src={image} 
                    alt="background" 
                    fill 
                    className="object-cover"
                />
            ) : (
                <Loader />
            )}
        </>
        
    )
}
