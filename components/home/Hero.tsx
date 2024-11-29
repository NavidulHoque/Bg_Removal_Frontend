/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import UploadImage from "./UploadImage";
import hero from "@/public/images/hero.png"
import { Session } from "next-auth";


export default function Hero({ session }: { session: Session | null }) {

  return (
    <div className="flex-between xl:flex-row flex-col 2xl:gap-x-32 gap-x-20 py-20">

      <div className="flex-column gap-y-4">

        <p className="sm:text-70-semibold text-40-semibold xl:text-left text-center">
          Remove the <span className="font-extrabold text-gradient-violet-fuchsia">background</span> from images for free.
        </p>

        <p className="text-[18px] text-[#515151] xl:text-left text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

        <div className="xl:self-start self-center">
          <UploadImage session={session} />
        </div>

      </div>

      <Image
        src={hero}
        alt="image"
        quality={100}
        width={638}
        height={638}
      />

    </div>
  )
}
