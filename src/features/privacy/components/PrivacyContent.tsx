"use client";

import { motion } from "framer-motion";
import { privacyPolicyData } from "../data/privacyPolicyData";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export default function PrivacyContent() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section ref={ref} className="bg-white  dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-2  gap-12">
       

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-12"
        >
          {privacyPolicyData.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {section.content.trim()}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
