import { Plan } from "@/data/plans";
import Image from "next/image";
import logo from "@/public/images/logo_icon.png"
import Button from "./Button";

interface Prop {
  plan: Plan
}

export default function Card({ plan }: Prop) {
  return (
    <div className="bg-[#FFFFFF] w-[360px] h-[400px] rounded-[30px] px-10 py-16 border-[1px] border-[#EDEDED] shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover-scale">

      <div className="flex-column gap-y-3">

        <Image src={logo} alt="logo" />

        <span className="text-22-semibold">{plan.level}</span>

        <span className="text-[16px] text-[#515151]">{plan.desc}</span>

        <div className="flex gap-x-3 h-[40px] mt-[20px] mb-[30px]">

          <span className="text-40-medium">{`$${plan.price}`}</span>

          <span className="text-16-normal self-end">{`/${plan.credits} credits`}</span>

        </div>

        <Button 
          style="bg-[#262626] text-white w-[270px] h-[55px] rounded-lg"
          label="Get started" 
        />

      </div>

    </div>
  )
}
