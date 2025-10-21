"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutData } from "@/features/about/data/aboutData";
import { useScrollFadeIn } from "@/features/about/hooks/useScrollFadeIn";

export default function AboutSection() {
  const { ref, controls, variants } = useScrollFadeIn();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md md:max-w-lg h-[300px] sm:h-[400px] md:h-[450px]">
            <Image
              src={aboutData.image}
              alt={aboutData.title}
              fill
              className="object-contain drop-shadow-xl rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {aboutData.title}
          </h2>
          <h3 className="text-lg md:text-xl text-gray-700 font-semibold">
            {aboutData.subtitle}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {aboutData.description}
          </p>

          <ul className="mt-6 space-y-2">
            {aboutData.highlights.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
