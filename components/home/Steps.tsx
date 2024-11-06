import { steps } from '@/data/steps'
import { Step } from '@/data/steps'
import React from 'react'

export default function Steps() {
  return (
    <div className='flex flex-col gap-y-20 py-40'>

      <h1 className='title'>Steps to remove background <br /> image in seconds</h1>

      <div className='grid grid-cols-3 gap-10'>

        {steps.map(({ icon: Icon, heading, step }: Step) => (

          <div 
            key={heading}
            className='card rounded-lg'
          >

            <div className='flex items-center gap-x-2'>

              <Icon />

              <h2 className='text-24-medium'>{heading}</h2>

            </div>

            <p className='text-[16px] text-[rgba(124,124,124,1)] pl-[53px]'>{step}</p>

          </div>

        ))}

      </div>

    </div>
  )
}
