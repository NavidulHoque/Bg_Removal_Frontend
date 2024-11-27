"use client"

import Upload from "@/icons/Upload"
import { Button } from '@/components/ui/button';
import useApp from "@/hooks/useApp";
import { useRef } from "react";
import { Session } from "next-auth";
import { useRouter } from 'next/navigation'

export default function ShadButton({session}: {session: Session | null}) {

    const { values: { removeBg } } = useApp()
    
    const fileRef = useRef<HTMLInputElement | null>(null)

    const router = useRouter()

    const handleClick = () => {

        if (session?.user) {
            fileRef.current?.click()
        }

        else{
            router.push("/login")
        }
    }

    return (
        <>
            <input
                ref={fileRef}
                onChange={(e) => removeBg(e.target.files?.[0] as File)}
                type="file"
                accept="image/*"
                hidden
            />

            <Button
                onClick={handleClick}
                className="bg-gradient-violet-fuchsia text-20-normal-white flex-center gap-x-2 w-[266px] h-[67px] rounded-full hover-scale"
            >
                <Upload />Upload your image
            </Button>
        </>
    )
}
