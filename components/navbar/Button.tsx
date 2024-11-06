"use client"

import RightArrow from "@/icons/RightArrow"
import { useClerk } from "@clerk/nextjs"

export default function Button() {

    const { openSignIn } = useClerk()

    return (
        <button
            className="flex-center gap-x-2 bg-[#313131] text-20-normal-white w-[209px] h-[57px] rounded-full hover-scale"
            onClick={() => openSignIn({})}
        >
            Sign In <RightArrow />
        </button>
    )
}
