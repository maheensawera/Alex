"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * 0.3;
    const y = (e.clientY - centerY) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-white text-background hover:bg-white/90",
    secondary: "bg-surface-elevated text-white hover:bg-surface-elevated/80 border border-white/10",
    outline: "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
  };

  const ButtonContent = (
    <motion.div
      ref={ref}
      className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-sm tracking-wide overflow-hidden group ${variants[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: variant === "primary"
            ? "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
}
