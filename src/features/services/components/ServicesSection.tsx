"use client";

import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import ServiceCard from "./ServiceCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function ServicesSection() {
  const cardVariants = useScrollAnimation();

  return (
    <section className="py-20  transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          How NaijaEscrow Works
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Secure your transactions from start to finish in a few simple steps.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              variants={cardVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
