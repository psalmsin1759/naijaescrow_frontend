"use client";

import { motion } from "framer-motion";
import { whyChooseData } from "@/features/about/data/whyChooseData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WhyChooseUs() {
  const { ref, inView, animation } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Why Choose NaijaEscrow?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseData.map((item) => (
            <motion.div
              key={item.id}
              variants={animation}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-primary mb-4 flex justify-center">
                <item.icon size={36} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
