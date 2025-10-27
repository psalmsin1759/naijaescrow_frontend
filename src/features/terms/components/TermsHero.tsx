"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export default function TermsHero() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-primary/10 to-transparent py-24 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        Terms of Service
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300"
      >
        Please review our terms carefully to understand your rights and obligations
        when using NaijaEscrow.
      </motion.p>
    </section>
  );
}
