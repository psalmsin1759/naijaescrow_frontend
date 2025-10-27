"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { termsData } from "../data/termsData";
import TableOfContents from "./TableOfContents";

export default function TermsContent() {
  const { ref, visible } = useAnimateOnScroll(0.15);

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          {termsData.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <TableOfContents items={termsData.map(({ id, title }) => ({ id, title }))} />
      </div>
    </section>
  );
}
