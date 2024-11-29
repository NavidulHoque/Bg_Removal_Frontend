import DownloadImage from "@/components/result/DownloadImage"
import Background from "@/components/result/Background"
import Foreground from "@/components/result/Foreground"
import TryAnotherImage from "@/components/result/TryAnotherImage"
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CleanUp from "@/components/result/CleanUp";
import transparentBg from "@/public/images/bg_layer.png"


export default async function Result() {

  const session = await auth()

  if (!session?.user) redirect("/");

  return (
    <>
      <CleanUp />

      <section className='h-[82vh] pt-12'>

        <div className='bg-[#FFFFFF] flex-column gap-y-7 w-full min-h-[600px] rounded-[15px] border-[1px] border-[#EDEDED] shadow-[0_2px_2px_rgba(0,0,0,0.08)] px-[70px] py-[50px]'>

          <div className="flex gap-x-12">

            <div className='image_container'>

              <h2 className='text-20-medium'>Original</h2>

              <div className='image_wrapper flex-center'>

                <Background />

              </div>

            </div>

            <div className='image_container'>

              <h2 className='text-20-medium'>Background Removed</h2>

              <div
                className='image_wrapper flex-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(${transparentBg})` }}
              >
                <Foreground />

              </div>

            </div>

          </div>

          <div className="self-end flex gap-x-4">

            <TryAnotherImage />

            <DownloadImage />

          </div>

        </div>

      </section>
    </>
  )
}
