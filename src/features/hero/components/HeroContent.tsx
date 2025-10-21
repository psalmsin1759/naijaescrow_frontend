"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useHeroAnimation } from "@/features/hero/hooks/useHeroAnimation";
import { heroData } from "@/features/hero/data/heroData";

export default function HeroContent() {
  const { container, fadeUp } = useHeroAnimation();

  return (
    <motion.div
      className="flex flex-col justify-center gap-6 max-w-xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        variants={fadeUp}
        className="text-3xl sm:text-4xl md:text-7xl font-bold  leading-tight"
      >
        {heroData.title}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-gray-600 text-base sm:text-lg md:text-2xl"
      >
        {heroData.subtitle}
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-4">
        <Link
          href={heroData.ctaPrimary.href}
          className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition"
        >
          {heroData.ctaPrimary.text}
        </Link>
        <Link
          href={heroData.ctaSecondary.href}
          className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition"
        >
          {heroData.ctaSecondary.text}
        </Link>
      </motion.div>
    </motion.div>
  );
}
