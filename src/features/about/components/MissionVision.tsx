"use client";

import { motion } from "framer-motion";
import { missionData } from "@/features/about/data/missionData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MissionVision() {
  const { ref, inView, animation } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {missionData.map((item) => (
          <motion.div
            key={item.id}
            variants={animation}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-8 rounded-2xl shadow-md bg-gray-50 dark:bg-gray-800"
          >
            <h3 className="text-2xl font-semibold mb-3 text-primary">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
