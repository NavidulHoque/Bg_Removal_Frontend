"use client"

import { Button } from '@/components/ui/button';
import useApp from "@/hooks/useUserCredits";
import { delay } from '@/lib/utils';
import { useRef } from "react";

export default function TryAnotherImage() {

    const { values: { removeBg, setImage, setBgRemovedImage } } = useApp()

    const fileRef = useRef<HTMLInputElement | null>(null)

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

        setImage("")
        setBgRemovedImage("")

        await delay()

        removeBg(e.target.files?.[0] as File, true)
    }
    
    return (
        <>
            <input
                ref={fileRef}
                onChange={handleChange}
                type="file"
                accept="image/*"
                hidden
            />

            <Button
                onClick={() => fileRef.current?.click()}
                className="result_page_button hover:bg-white text-[#8448FD] bg-white border-[1px] border-[#8448FD]"
            >
                Try another image
            </Button>
        </>
    )
}
