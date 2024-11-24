"use client"

import Upload from "@/icons/Upload"
import { Button } from '@/components/ui/button';
import useCredits from "@/hooks/useApp";
import { useRef } from "react";
import { Session } from "next-auth";

export default function ShadButton({session}: {session: Session}) {

    const { values: { removeBg } } = useCredits()
    
    const fileRef = useRef<HTMLInputElement | null>(null)

    return (
        <>
            <input
                ref={fileRef}
                onChange={(e) => removeBg(e.target.files?.[0])}
                type="file"
                accept="image/*"
                hidden
            />

            <Button
                onClick={() => fileRef.current?.click()}
                className="bg-gradient-violet-fuchsia text-20-normal-white flex-center gap-x-2 w-[266px] h-[67px] rounded-full hover-scale"
            >
                <Upload />Upload your image
            </Button>
        </>
    )
}
