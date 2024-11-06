import { reviews } from "@/data/reviews";
import Image from "next/image";
import { Review } from '@/data/reviews';

export default function Reviews() {
  return (
    <div className='flex-column gap-y-20 py-20'>

      <h1 className='title'>Customer Testimonials</h1>

      <div className="grid grid-cols-2 gap-20">

        {reviews.map((review: Review) => (

          <div
            key={review.id}
            className="card flex-column !space-y-0 rounded-[14px]"
          >
            <span className="text-55-medium-62577B_violet">”</span>

            <p className="text-[18px] leading-7 text-[#797484] pb-4">{review.text}</p>

            <div className="flex gap-x-4">

              <Image
                src={review.image}
                alt="image"
                className="rounded-full size-[55px]"
              />

              <div className="flex-column">

                <h3 className="text-22-medium text-[#4B445A]">{review.author}</h3>

                <span className="text-14-medium-62577B_violet">{review.jobTitle}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
