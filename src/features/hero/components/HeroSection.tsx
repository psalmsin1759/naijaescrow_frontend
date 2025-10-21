"use client";

import Image from "next/image";
import { motion, Transition } from "framer-motion";
import { heroData } from "@/features/hero/data/heroData";
import HeroContent from "./HeroContent";
import { useHeroAnimation } from "@/features/hero/hooks/useHeroAnimation";
import { Shield, CreditCard, Lock, Send } from "lucide-react"; // ✅ icon imports

export default function HeroSection() {
  const { image } = useHeroAnimation();

  // Proper float transition
  const floatTransition: Transition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  };

  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-4 md:gap-10 relative">
        {/* Left content */}
        <div className="w-full md:w-1/2">
          <HeroContent />
        </div>

        {/* Right image */}
        <motion.div
          variants={image}
          initial="hidden"
          animate="visible"
          className="relative w-full md:w-1/2 flex justify-center md:justify-end p-4"
        >
          {/* Floating icons */}
          <motion.div
            className="absolute top-0 left-6 text-blue-500 opacity-50"
            animate={{ y: [0, 10, 0] }}
            transition={floatTransition}
          >
            <Shield size={36} />
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-10 text-green-500 opacity-50"
            animate={{ y: [0, 15, 0] }}
            transition={floatTransition}
          >
            <CreditCard size={40} />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-10 text-purple-500 opacity-50"
            animate={{ y: [0, -25, 0] }}
            transition={floatTransition}
          >
            <Lock size={34} />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-5 text-orange-400 opacity-50"
            animate={{ y: [0, -30, 0] }}
            transition={floatTransition}
          >
            <Send size={38} />
          </motion.div>

          {/* Image container */}
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] z-10">
            <Image
              src={heroData.image}
              alt="Secure transactions"
              fill
              className="object-contain w-full h-full drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
