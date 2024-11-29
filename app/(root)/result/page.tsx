import DownloadImage from "@/components/result/DownloadImage"
import Background from "@/components/result/Background"
import Foreground from "@/components/result/Foreground"
import TryAnotherImage from "@/components/result/TryAnotherImage"
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CleanUp from "@/components/result/CleanUp";


export default async function Result() {

  const session = await auth()

  if (!session?.user) redirect("/");

  return (
    <>
      <CleanUp />

      <section className='min-h-[82vh] py-12'>

        <div className='bg-[#FFFFFF] flex-column gap-y-7 w-full rounded-[15px] border-[1px] border-[#EDEDED] shadow-[0_2px_2px_rgba(0,0,0,0.08)] md:px-[70px] md:py-[50px] p-10'>

          <div className="flex sm:flex-row flex-col gap-12">

            <div className='image_container'>

              <h2 className='text-20-medium'>Original</h2>

              <div className='flex-center'>

                <Background />

              </div>

            </div>

            <div className='image_container'>

              <h2 className='text-20-medium'>Background Removed</h2>

              <div
                className='flex-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(/images/bg_layer.png)` }}
              >
                <Foreground />

              </div>

            </div>

          </div>

          <div className="sm:self-end flex sm:flex-row flex-col gap-4">

            <TryAnotherImage />

            <DownloadImage />

          </div>

        </div>

      </section>
    </>
  )
}
