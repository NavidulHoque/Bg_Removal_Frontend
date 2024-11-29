/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import useImage from "@/hooks/useImage"
import { useEffect } from "react"

export default function CleanUp() {

    const {values: {setImage, setBgRemovedImage}} = useImage()

    useEffect(() => {

        return () => {
            setImage("")
            setBgRemovedImage("")
            localStorage.setItem("realImageOfBgRemoval", JSON.stringify(""))
            localStorage.setItem("bgRemovedImageOfBgRemoval", JSON.stringify(""))
        }

    }, [])

    return <></>
}
