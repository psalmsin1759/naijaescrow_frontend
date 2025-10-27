"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { ShieldCheck } from "lucide-react";

export default function PrivacyHero() {
  const { ref, visible } = useAnimateOnScroll(0.3);

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-gray-800 dark:via-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="w-4 h-4" /> Our Privacy Commitment
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            We value your trust and take your data privacy seriously. 
            Learn how NaijaEscrow protects your personal information and ensures secure transactions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
