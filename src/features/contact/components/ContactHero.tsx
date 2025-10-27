"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/features/contact/hooks/useAnimateOnScroll";

export function ContactHero() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section ref={ref} className="py-24 bg-primary/10 dark:bg-gray-900 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg"
      >
        Have questions, partnership ideas, or need help with your transaction?
        Our support team is ready to assist you.
      </motion.p>
    </section>
  );
}
