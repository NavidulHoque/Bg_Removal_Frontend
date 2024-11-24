/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ShadButton from "./ShadButton";
import hero from "@/public/images/hero.png"
import { auth } from "@/auth";


export default async function Hero() {

  const session = await auth()

  return (
    <div className="flex-between gap-x-32 py-20">

      <div className="space-y-4">

        <p
          className="text-70-semibold"
        >
          Remove the <span className="font-extrabold text-gradient-violet-fuchsia">background</span> from images for free.

        </p>

        <p className="text-[18px] text-[#515151]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

        <ShadButton session={session} />

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
