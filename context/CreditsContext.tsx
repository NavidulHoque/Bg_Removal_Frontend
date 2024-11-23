"use client"

import { createContext, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { url } from "@/url";
import { Session } from "next-auth";

export interface CreditsContextType {
    values: {
        credits: number;
        setCredits: Dispatch<SetStateAction<number>>;
        loadCreditsData: (session: Session) => Promise<void>;
        removeBg: (imageFile) => Promise<void>;
    };
}

export const CreditsContext = createContext<CreditsContextType>({} as CreditsContextType)

export default function CreditsProvider({ children }: { children: React.ReactNode }) {

    const [credits, setCredits] = useState<number>(5)

    const loadCreditsData = async (session: Session) => {

        const response = await axios.post(url + "/user/readCredits", {
            email: session?.user?.email,
            provider: session?.user?.provider
        })

        setCredits(response.data.creditBalance)
    }

    // const updateCreditsData = async () => {
        
    // }

    const removeBg = async (imageFile) => {
        
        try {
            console.log(imageFile)
        } 
        
        catch (error) {
            
        }
    }

    const values = {
        credits,
        setCredits,
        loadCreditsData,
        removeBg
    }

    return (
        <CreditsContext.Provider value={{ values }}>
            {children}
        </CreditsContext.Provider>
    )

}