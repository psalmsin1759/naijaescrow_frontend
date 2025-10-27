import { ContactHero } from "@/features/contact/components/ContactHero";
import { ContactInfoSection } from "@/features/contact/components/ContactFormSection";
import { ContactFormSection } from "@/features/contact/components/ContactInfoSection";
import { CTASection } from "@/features/contact/components/CTASection";

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
      <CTASection />
    </main>
  );
}
