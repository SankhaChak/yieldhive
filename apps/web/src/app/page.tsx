import BackgroundDots from "@yieldhive/ui/components/ui/background-dots";
import BrandMarquee from "../components/home/brand-marquee";
import Hero from "../components/layout/hero";
import HeroProductDemo from "../components/layout/hero/demo";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <BackgroundDots />
      <Hero />
      <HeroProductDemo />
      <BrandMarquee />
    </div>
  );
}
