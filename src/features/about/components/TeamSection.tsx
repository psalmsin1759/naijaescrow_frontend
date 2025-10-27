"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamData } from "@/features/about/data/teamData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function TeamSection() {
  const { ref, inView, animation } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          variants={animation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={animation}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h4>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
