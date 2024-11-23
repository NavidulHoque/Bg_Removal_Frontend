"use client"

import useCredits from "@/hooks/useCredits";
import { Session } from "next-auth";
import { useEffect } from "react";

export default function Credits({session}: {session: Session}) {

    const { values: { credits, loadCreditsData } } = useCredits()

    useEffect(() => {
      
        loadCreditsData(session)
      
    }, [loadCreditsData, session])
    

    return <span>{credits}</span>
}
