/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import useUserCredits from "@/hooks/useUserCredits";
import { Session } from "next-auth";
import { useEffect } from "react";
import credit from "@/public/images/credit.png"
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Credits({ session }: { session: Session }) {

    const { values: { credits, fetchData } } = useUserCredits()

    const router = useRouter()

    useEffect(() => {

        fetchData(session)

    }, [session])


    return (
        <Button
            className="bg-[#D7EBFF] hover:bg-[#D7EBFF] text-black w-[200px] h-[50px] flex-center gap-x-3 rounded-full hover-scale cursor-pointer font-normal"
            onClick={() => router.push("/buy")}
        >

            <Image src={credit} alt="credit" quality={100} className="size-6" />

            <span className="text-[18px]">credits left: {credits}</span>

        </Button>
    )
}
