import AboutSection from "@/features/about/components/AboutSection";
import HeroSection from "@/features/hero/components/HeroSection";
import ServicesSection from "@/features/services/components/ServicesSection";


export default function Home() {
  return (
   <div>
    <HeroSection /> 
    <AboutSection />
    <ServicesSection />
   </div>
  );
}
