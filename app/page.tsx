import ReactLenis from "lenis/react";
import { HeroSection } from "./components/landing/sections/hero";
import { ChooseSection } from "./components/landing/sections/choose";
import { FeaturesSection } from "./components/landing/sections/features";
import { DemoSection } from "./components/landing/sections/demo";
import { ExploreSection } from "./components/landing/sections/explore";
import { CTASection } from "./components/landing/sections/cta";
import { Footer } from "./components/landing/layout/footer";

export default function Home() {
  return (
    <ReactLenis root>
      <HeroSection />
      <ChooseSection />
      <FeaturesSection />
      <DemoSection />
      <ExploreSection />
      <CTASection />
      <Footer />
    </ReactLenis>
  );
}

