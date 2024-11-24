/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import useCredits from "@/hooks/useApp";
import { Session } from "next-auth";
import { useEffect } from "react";

export default function Credits({session}: {session: Session}) {

    const { values: { credits, fetchData } } = useCredits()

    useEffect(() => {
      
        fetchData(session)
      
    }, [session])
    

    return <span>{credits}</span>
}
