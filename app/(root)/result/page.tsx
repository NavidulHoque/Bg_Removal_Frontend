import background from "@/public/images/background.png"
import foreground from "@/public/images/foreground.png"
import ImageComp from '@/components/result/ImageComp'
import Button from "@/components/result/Button"
//import Loader from "@/components/result/Loader"

export default function Result() {
  return (
    <section className='h-[82vh] pt-12'>

      <div className='bg-[#FFFFFF] flex-column gap-y-7 w-full min-h-[600px] rounded-[15px] border-[1px] border-[#EDEDED] shadow-[0_2px_2px_rgba(0,0,0,0.08)] px-[70px] py-[50px]'>

        <div className="flex gap-x-12">

          <div className='image_container'>

            <h2 className='text-20-medium'>Original</h2>

            <div className='image_wrapper'>

              <ImageComp
                src={background}
                alt="'background'"
              />

            </div>

          </div>

          <div className='image_container'>

            <h2 className='text-20-medium'>Background Removed</h2>

            <div className='image_wrapper flex-center'>

              {/* <Loader /> */}

              <ImageComp
                src={foreground}
                alt="foreground"
              />

            </div>

          </div>

        </div>

        <div className="self-end flex gap-x-4">

          <Button 
            extraStyle="text-[#8448FD] border-[1px] border-[#8448FD]"
            label="Try another image"
          />

          <Button 
            extraStyle="text-white bg-gradient-violet-fuchsia"
            label="Download image" 
          />

        </div>

      </div>

    </section>
  )
}
