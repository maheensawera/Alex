"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  type?: "words" | "chars" | "lines";
  animation?: "fadeUp" | "fadeIn" | "slideIn" | "scaleUp";
}

const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideIn: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  type = "words",
  animation = "fadeUp",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const items = type === "chars" ? text.split("") : text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = animations[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          transition={{
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          style={{ whiteSpace: type === "words" ? "pre" : undefined }}
        >
          {item}
          {type === "words" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function AnimatedLine({
  children,
  className = "",
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
