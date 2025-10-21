// src/features/about/hooks/useScrollFadeIn.ts
"use client";

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollFadeIn() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier equivalent of easeOut
      },
    },
  } as const;

  return { ref, controls, variants };
}
