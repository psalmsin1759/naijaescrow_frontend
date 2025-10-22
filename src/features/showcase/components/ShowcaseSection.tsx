"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { showcaseData } from "../data/showcaseData";

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeItem = showcaseData.find((item) => item.id === activeTab);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Explore NaijaEscrow Portal
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Switch between different sections of the NaijaEscrow dashboard to see
          how it works.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-gray-200 dark:border-gray-700 pb-3">
          {showcaseData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative pb-2 text-base font-medium transition-all duration-300
                ${
                  activeTab === item.id
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 0.5,
                  boxShadow:
                    "0px 10px 30px rgba(0, 0, 0, 0.25), 0px 0px 10px rgba(0, 120, 255, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-black/80 p-4 rounded-2xl"
              >
                <Image
                  src={activeItem?.image || ""}
                  alt={activeItem?.title || ""}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          key={activeItem?.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
        >
          {activeItem?.description}
        </motion.p>
      </div>
    </section>
  );
}
