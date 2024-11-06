import Image from "next/image";
import Button from "./Button";
import hero from "@/public/images/hero.png"

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <div className="flex-between gap-x-32 py-20">

      <div className="space-y-4">

        <p
          className="text-70-semibold"
        >
          Remove the <span className="font-extrabold text-gradient-violet-fuchsia">background</span> from images for free.

        </p>

        <p className="text-[18px] text-[#515151]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

        <Button />

      </div>

      <div className="min-w-[638px] h-[638px] relative">

        <Image
          src={hero}
          alt="image"
          quality={100}
          fill
        />

      </div>

    </div>
  )
}
