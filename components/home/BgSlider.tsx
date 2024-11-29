"use client"

import { useState } from "react"
import background from "@/public/images/background.png"
import foreground from "@/public/images/foreground.png"

import Image from 'next/image';

export default function BgSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSliderPosition(Number(e.target.value));

  return (
    <div className="flex-column gap-y-20 py-20">

      <h1 className="title">Remove Background With High <br /> Quality and Accuracy</h1>

      <div className="self-center w-full max-w-3xl relative overflow-hidden rounded-lg">

        <Image
          src={background}
          alt="background"
          quality={100}
          style={{ clipPath: `inset(0 ${100.1 - sliderPosition}% 0 0)` }}
        />

        <Image
          src={foreground}
          alt="foreground"
          quality={100}
          className="absolute top-0 left-0 w-full h-full"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleChange}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
        />

      </div>

    </div>
  )
}
