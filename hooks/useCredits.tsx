"use client"

import { CreditsContext, CreditsContextType } from "@/context/CreditsContext";
import { useContext } from "react";


export default function useCredits(): CreditsContextType {
  return useContext(CreditsContext)
}
