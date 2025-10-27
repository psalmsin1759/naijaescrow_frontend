"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutHero() {
  const { ref, inView, animation } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-primary/5 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Empowering Secure Transactions Across Africa
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            NaijaEscrow ensures safe, transparent, and reliable digital
            transactions between buyers and sellers. Our mission is to build
            trust and simplify trade through technology-driven escrow services.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-primary/90 transition">
            Get Started
          </button>
        </motion.div>

        <motion.div
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:w-1/2"
        >
        {/*   <Image
            src={"/images/escrowbanner1.png"}
            alt="NaijaEscrow secure transaction illustration"
            className="w-full h-auto object-contain"
            priority
          /> */}
        </motion.div>
      </div>
    </section>
  );
}
