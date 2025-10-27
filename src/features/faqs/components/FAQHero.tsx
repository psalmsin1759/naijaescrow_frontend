"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { MessageCircle } from "lucide-react";

export default function FAQHero() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-gray-800 dark:via-gray-900 dark:to-black overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-slate-300/[0.04]"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <MessageCircle className="w-4 h-4" /> Need Help?
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find quick answers to common questions about how NaijaEscrow works.
            We’re here to make every transaction simple, safe, and transparent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
