"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAnimateOnScroll } from "@/features/contact/hooks/useAnimateOnScroll";

export function CTASection() {
  const { ref, visible } = useAnimateOnScroll(0.3);

  return (
    <section ref={ref} className="py-24 bg-primary text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Let’s Make Something Great Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-8 text-lg"
      >
        Whether you have a project idea or want to learn more about our escrow
        system, we’re just a message away.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/register"
          className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}
