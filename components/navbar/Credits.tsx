/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import useUserCredits from "@/hooks/useUserCredits";
import { Session } from "next-auth";
import { useEffect } from "react";

export default function Credits({session}: {session: Session}) {

    const { values: { credits, fetchData } } = useUserCredits()

    useEffect(() => {
      
        fetchData(session)
      
    }, [session])
    

    return <span>{credits}</span>
}
