import { auth } from "@/auth";
import BgSlider from "@/components/home/BgSlider";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import Steps from "@/components/home/Steps";
import TryNow from "@/components/home/TryNow";

export default async function Home() {

  const session = await auth()
  
  return (
    <section>
      
      <Hero session={session} />
      <Steps />
      <BgSlider />
      <Reviews />
      <TryNow session={session} />
      
    </section>
  );
}
