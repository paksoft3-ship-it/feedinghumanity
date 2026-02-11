import HeroSection from "@/components/sections/HeroSection";
import ImpactStats from "@/components/sections/ImpactStats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import FocusAreas from "@/components/sections/FocusAreas";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <FeaturedProjects />
      <Testimonials />
      <FocusAreas />
      <CTASection />
    </>
  );
}
