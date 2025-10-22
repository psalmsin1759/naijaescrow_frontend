"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants: any;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  variants,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl shadow-md 
                 border border-gray-100 dark:border-gray-700 
                 hover:shadow-xl transition-all duration-300 
                 flex flex-col items-center text-center"
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary mb-4 dark:bg-primary/20">
        <Icon size={36} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
}
