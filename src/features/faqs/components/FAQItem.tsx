"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700 py-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
          {question}
        </h4>
        {open ? (
          <ChevronUp className="text-primary w-5 h-5" />
        ) : (
          <ChevronDown className="text-gray-500 w-5 h-5" />
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
