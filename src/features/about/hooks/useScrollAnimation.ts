"use client";
import { useInView } from "react-intersection-observer";
import { Variants } from "framer-motion";

export function useScrollAnimation(threshold = 0.2) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  const animation: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return { ref, inView, animation };
}
