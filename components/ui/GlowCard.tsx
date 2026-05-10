"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className = "", glowColor = "rgba(99, 102, 241, 0.2)" }: GlowCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={`relative rounded-2xl glass overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect following mouse */}
      <motion.div
        className="absolute pointer-events-none -z-10"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      {children}
    </motion.div>
  );
}
