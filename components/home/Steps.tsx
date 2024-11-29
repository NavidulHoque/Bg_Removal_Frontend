import { steps } from '@/data/steps'
import { Step } from '@/data/steps'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export default function Steps() {
  return (
    <div className='flex flex-col gap-y-20 py-40'>

      <h1 className='title'>Steps to remove background <br /> image in seconds</h1>

      <div className='grid min-[1200px]:grid-cols-3 min-[800px]:grid-cols-2 min-[1400px]:gap-10 gap-5'>

        {steps.map(({ icon: Icon, heading, step }: Step) => (

          <Card key={heading} className="card rounded-lg">

            <CardHeader>

              <CardTitle className='flex items-center gap-x-3'>

                <Icon />

                <h2 className='text-24-medium'>{heading}</h2>

              </CardTitle>

            </CardHeader>

            <CardContent>

              <p className='text-[16px] text-[rgba(124,124,124,1)] pl-[53px]'>{step}</p>

            </CardContent>

          </Card>

        ))}

      </div>

    </div >
  )
}
