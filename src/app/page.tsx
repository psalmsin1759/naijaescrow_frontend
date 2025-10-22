import AboutSection from "@/features/about/components/AboutSection";
import HeroSection from "@/features/hero/components/HeroSection";
import ServicesSection from "@/features/services/components/ServicesSection";
import ShowcaseSection from "@/features/showcase/components/ShowcaseSection";


export default function Home() {
  return (
   <div>
    <HeroSection /> 
    <AboutSection />
    <ServicesSection />
    <ShowcaseSection />
   </div>
  );
}
