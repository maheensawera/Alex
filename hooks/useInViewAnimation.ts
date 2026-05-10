"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useInViewAnimation(margin = "-100px", once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });

  return { ref, isInView };
}
