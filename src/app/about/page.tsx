import AboutHero from "@/features/about/components/AboutHero";
import MissionVision from "@/features/about/components/MissionVision";
import WhyChooseUs from "@/features/about/components/WhyChooseUs";
import TeamSection from "@/features/about/components/TeamSection";
import TestimonialSection from "@/features/testimonials/components/TestimonialSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <TeamSection />
      <TestimonialSection/>
    </main>
  );
}
