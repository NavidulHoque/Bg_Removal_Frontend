"use client"

import { ImageContext, ImageContextType } from "@/context/ImageContext";
import { useContext } from "react";

export default function useImage(): ImageContextType {
  return useContext(ImageContext)
}
