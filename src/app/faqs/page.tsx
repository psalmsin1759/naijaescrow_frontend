import FAQHero from "@/features/faqs/components/FAQHero";
import FAQSection from "@/features/faqs/components/FAQSection";

export default function FAQsPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <FAQHero />
      <FAQSection />
    </main>
  );
}
