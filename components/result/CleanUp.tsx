/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import useApp from "@/hooks/useApp"
import { useEffect } from "react"

export default function CleanUp() {

    const {values: {setImage, setBgRemovedImage}} = useApp()

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
