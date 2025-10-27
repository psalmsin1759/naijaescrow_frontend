import { ServiceHero } from "@/features/services/components/ServiceHero";
import { ServiceList } from "@/features/services/components/ServiceList";
import { HowItWorksSection } from "@/features/services/components/HowItWorksSection";
import { CTASection } from "@/features/services/components/CTASection";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServiceHero />
      <ServiceList />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}
