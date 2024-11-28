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

export interface UserCreditsContextType {
    values: {
        credits: number | undefined;
        setCredits: Dispatch<SetStateAction<number | undefined>>;
        fetchData: (session: Session) => Promise<void>;
        user: User;
        updateCreditsData: () => Promise<void>;
    }
}

export const UserCreditsContext = createContext<UserCreditsContextType>({} as UserCreditsContextType)

export default function UserCreditsProvider({ children }: { children: React.ReactNode }) {

    const [credits, setCredits] = useState<number | undefined>()
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

        catch {

            toast({
                variant: "error",
                description: "Something went wrong, might be network issue, please reload the page"
            })
        }

    }

    const updateCreditsData = async () => {

        try {
            const response = await axios.put(url + "/user/updateCredits", {
                email: user.email,
                provider: user.provider,
                creditBalance: user.creditBalance
            })

            if (response.data.status) {

                setUser(response.data.user)
                setCredits(response.data.user.creditBalance)
            }
        }

        catch (error) {
            console.error(error) //nothing to do as user's objective has been achieved, what can he do if there are some server related issues
        }
    }

    const values = {
        credits,
        setCredits,
        fetchData,
        user,
        updateCreditsData
    }

    return (
        <UserCreditsContext.Provider value={{ values }}>
            {children}
        </UserCreditsContext.Provider>
    )
}