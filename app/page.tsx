import { Hero } from "./components/sections/hero";
import { Curriculum } from "./components/sections/curriculum";
import { USPs } from "./components/sections/usps";
import { HowItWorks } from "./components/sections/how-it-works";
import { Testimonials } from "./components/sections/testimonials";
import { Pricing } from "./components/sections/pricing";
import { StickyCTA } from "./components/ui/sticky-cta";

export default function Home() {
  return (
    <main className="bg-gray-950">
      <Hero />
      <Curriculum />
      <USPs />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <StickyCTA />
    </main>
  );
}
