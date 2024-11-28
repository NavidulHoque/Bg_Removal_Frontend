"use client"

import { UserCreditsContext, UserCreditsContextType } from "@/context/UserCreditsContext";
import { useContext } from "react";


export default function useUserCredits(): UserCreditsContextType {
  return useContext(UserCreditsContext)
}
