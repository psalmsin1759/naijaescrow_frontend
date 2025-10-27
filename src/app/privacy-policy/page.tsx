import PrivacyHero from "@/features/privacy/components/PrivacyHero";
import PrivacyTableOfContents from "@/features/privacy/components/PrivacyTableOfContents";
import PrivacyContent from "@/features/privacy/components/PrivacyContent";
import { CTASection } from "@/features/contact/components/CTASection";

export default function PrivacyPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <PrivacyHero />
      <section className="container mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-12 items-start">
       
        <div className="hidden md:block md:col-span-1">
          <PrivacyTableOfContents />
        </div>

      
        <div className="md:col-span-3 ">
          <PrivacyContent />
        </div>
      </section>
      <CTASection/>
    </main>
  );
}
