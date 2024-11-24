"use client"

import { AppContext, AppContextType } from "@/context/AppContext";
import { useContext } from "react";


export default function useApp(): AppContextType {
  return useContext(AppContext)
}
