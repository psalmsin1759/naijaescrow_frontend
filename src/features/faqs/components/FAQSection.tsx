"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { faqData } from "../data/faqData";
import FAQItem from "./FAQItem";

export default function FAQSection() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section
      ref={ref}
      className="py-20 bg-muted/30 dark:bg-gray-900"
      id="faqs"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 md:p-10"
        >
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
