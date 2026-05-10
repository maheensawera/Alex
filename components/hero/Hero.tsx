"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown, Sparkles } from "lucide-react";

function FloatingShape({
  delay,
  duration,
  size,
  x,
  y,
  color,
}: {
  delay: number;
  duration: number;
  size: number;
  x: string;
  y: string;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent-glow/10 via-transparent to-transparent blur-3xl" />
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Mouse glow effect */}
      <MouseGlow />

      {/* Floating shapes */}
      <FloatingShape
        delay={0}
        duration={8}
        size={400}
        x="10%"
        y="20%"
        color="radial-gradient(circle, rgba(59,130,246,0.4), transparent)"
      />
      <FloatingShape
        delay={2}
        duration={10}
        size={300}
        x="70%"
        y="60%"
        color="radial-gradient(circle, rgba(139,92,246,0.4), transparent)"
      />
      <FloatingShape
        delay={4}
        duration={12}
        size={250}
        x="50%"
        y="10%"
        color="radial-gradient(circle, rgba(6,182,212,0.3), transparent)"
      />
      <FloatingShape
        delay={1}
        duration={9}
        size={350}
        x="80%"
        y="30%"
        color="radial-gradient(circle, rgba(99,102,241,0.3), transparent)"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            perspective: 1000,
          }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles size={14} className="text-accent-glow" />
            <span className="text-xs text-text-secondary tracking-wide uppercase">
              Creative Developer & Designer
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-6">
            <AnimatedText
              text="Crafting Digital"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] font-general-sans"
              delay={0.4}
              staggerDelay={0.04}
              type="words"
              animation="fadeUp"
            />
            <AnimatedText
              text="Experiences"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] font-general-sans gradient-text"
              delay={0.6}
              staggerDelay={0.04}
              type="words"
              animation="fadeUp"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I design and build immersive digital products that blend
            aesthetics with functionality. Turning complex ideas into
            elegant, intuitive experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <MagneticButton variant="primary" href="#projects">
              View My Work
            </MagneticButton>
            <MagneticButton variant="outline" href="#contact">
              Get In Touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-text-muted"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
