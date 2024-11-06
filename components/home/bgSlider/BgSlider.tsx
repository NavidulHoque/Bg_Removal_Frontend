"use client"

import { useState } from "react"
import background from "@/public/images/background.png"
import foreground from "@/public/images/foreground.png"
import ImageComp from "./ImageComp"

export default function BgSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSliderPosition(Number(e.target.value));

  return (
    <div className="flex-column gap-y-20 py-20">

      <h1 className="title">Remove Background With High <br /> Quality and Accuracy</h1>

      <div className="self-center w-[860px] h-[532px] relative overflow-hidden rounded-lg">

        <ImageComp
          src={background}
          alt="background"
          clipPath={`inset(0 ${100.1 - sliderPosition}% 0 0)`}
        />

        <ImageComp
          src={foreground}
          alt="foreground"
          clipPath={`inset(0 0 0 ${sliderPosition}%)`}
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
