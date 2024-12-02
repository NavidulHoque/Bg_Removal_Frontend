import GetStarted from "@/components/buyCredit/GetStarted";
import { plans } from "@/data/plans";
import { Plan } from "@/data/plans";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/logo_icon.png"
import OurPlans from "@/components/buyCredit/OurPlans";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"


export default async function BuyCredit() {

  const session = await auth()
    
  if (!session?.user) redirect("/");

  return (
    <section className='min-h-[82vh] py-12'>

      <div className="flex-column items-center gap-y-6">

        <OurPlans />

        <h1 className="title !text-[40px] !leading-[50px] mb-7">Choose the plan that’s right for you</h1>

        <div className="grid xl:grid-cols-3 min-[850px]:grid-cols-2 gap-10">

          {plans.map((plan: Plan) => (

            <Card key={plan.level} className="bg-[#FFFFFF] min-[400px]:w-[360px] w-[90vw] rounded-[30px] px-6 py-10 border-[1px] border-[#EDEDED] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover-scale">

              <CardHeader className="space-y-3">

                <CardTitle className='flex items-center gap-x-3'>

                  <Image src={logo} alt="logo" />

                  <span className="text-22-semibold">{plan.level}</span>

                </CardTitle>

                <CardDescription>

                  <span className="text-[16px] text-[#515151]">{plan.desc}</span>

                </CardDescription>

              </CardHeader>

              <CardContent>

                <div className="flex gap-x-3 h-[40px] mt-[20px] mb-[30px]">

                  <span className="text-40-medium">{`$${plan.price}`}</span>

                  <span className="text-16-normal self-end">{`/${plan.credits} credits`}</span>

                </div>

                <GetStarted />

              </CardContent>

            </Card>

          ))}

        </div>

      </div>

    </section>
  )
}
