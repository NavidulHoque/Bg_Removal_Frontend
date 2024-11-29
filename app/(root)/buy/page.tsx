import Button from "@/components/buyCredit/Button";
import Card from "@/components/buyCredit/Card";
import { plans } from "@/data/plans";
import { Plan } from "@/data/plans";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function BuyCredit() {

  const session = await auth()

  if (!session?.user) redirect("/");

  return (
    <section className='h-[82vh] pt-12'>

      <div className="flex-column items-center gap-y-6">

        <Button 
          style="text-16-medium uppercase w-[200px] h-[50px] rounded-full border-[1px] border-[#C1C1C1] hover-scale"
          label="Our Plans" 
        />

        <h1 className="title !text-[40px] !leading-[50px] mb-7">Choose the plan that’s right for you</h1>

        <div className="grid grid-cols-3 gap-x-10">

          {plans.map((plan: Plan) => (
            <Card key={plan.level} plan={plan} />
          ))}

        </div>

      </div>

    </section>
  )
}
