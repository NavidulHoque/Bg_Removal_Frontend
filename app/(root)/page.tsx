import BgSlider from "@/components/home/bgSlider/BgSlider";
import Hero from "@/components/home/Hero";
import Reviews from "@/components/home/Reviews";
import Steps from "@/components/home/Steps";
import TryNow from "@/components/home/TryNow";

export default function Home() {
  return (
    <section>
      
      <Hero />
      <Steps />
      <BgSlider />
      <Reviews />
      <TryNow />
      
    </section>
  );
}
