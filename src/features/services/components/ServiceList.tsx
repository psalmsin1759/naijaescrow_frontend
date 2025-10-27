"use client";

import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";

export function ServiceList() {
  const { ref, visible } = useAnimateOnScroll(0.15);

  return (
    <section ref={ref} className="py-20 ">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all bg-muted/30"
          >
            {/* <div className="text-5xl mb-4">{service.icon}</div> */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
