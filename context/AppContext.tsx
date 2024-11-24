/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { createContext, useState, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { url } from "@/url";
import { Session } from "next-auth";
import { useToast } from "@/hooks/use-toast"

export interface User {
    _id: string;
    email: string;
    username: string;
    password: string;
    photo: string;
    provider: string;
    creditBalance: number;
}

export interface AppContextType {
    values: {
        credits: number;
        setCredits: Dispatch<SetStateAction<number>>;
        fetchData: (session: Session) => Promise<void>;
        // removeBg: (imageFile) => Promise<void>;
        user: User
    }
}


export const AppContext = createContext<AppContextType>({} as AppContextType)


export default function AppProvider({ children }: { children: React.ReactNode }) {

    const [credits, setCredits] = useState<number>(5)
    const [user, setUser] = useState<User>({} as User)

    const { toast } = useToast()

    const fetchData = async (session: Session) => {

        try {

            const response = await axios.post(url + "/user/read", {
                email: session?.user?.email,
                provider: session?.user?.provider
            })

            if (response.data.status) {
                setCredits(response.data.user.creditBalance)
                setUser(response.data.user)
            }
        }

        catch (error) {

            toast({
                variant: "error",
                description: error instanceof Error && error.message
            })
        }

    }

    // const updateCreditsData = async () => {

    // }

    // const removeBg = async (imageFile) => {

    //     try {
    //         console.log(imageFile)
    //     }

    //     catch (error) {

    //     }
    // }

    const values = {
        credits,
        setCredits,
        fetchData,
        // removeBg,
        user
    }

    return (
        <AppContext.Provider value={{ values }}>
            {children}
        </AppContext.Provider>
    )

}