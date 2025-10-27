"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

const steps = [
  {
    title: "1. Create an Order",
    description: "The buyer or seller initiates a transaction securely.",
  },
  {
    title: "2. Deposit Funds",
    description: "Buyer funds are securely held in escrow until completion.",
  },
  {
    title: "3. Deliver the Goods/Service",
    description: "Seller completes their part of the agreement.",
  },
  {
    title: "4. Confirm & Release Funds",
    description: "Once confirmed, funds are released to the seller instantly.",
  },
];

export function HowItWorksSection() {
  const { ref, visible } = useAnimateOnScroll(0.2);

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-muted/30 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
