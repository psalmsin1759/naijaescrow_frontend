"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

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
        Ready to Secure Your Next Transaction?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-8 text-lg"
      >
        Join thousands of users who trust NaijaEscrow for safe, transparent, and
        easy payments.
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
