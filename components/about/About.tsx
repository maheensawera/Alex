"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { AnimatedText, AnimatedLine } from "@/components/ui/AnimatedText";
import { Code2, Palette, Globe, Zap } from "lucide-react";

const stats = [
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "12", label: "Awards Won" },
];

const services = [
  {
    icon: Code2,
    title: "Development",
    description: "Building performant, scalable applications with modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating visually stunning interfaces that prioritize user experience and brand identity.",
  },
  {
    icon: Globe,
    title: "Strategy",
    description: "Developing digital strategies that align business goals with user needs and market trends.",
  },
  {
    icon: Zap,
    title: "Motion",
    description: "Crafting immersive animations and interactions that bring interfaces to life.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-accent-purple/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <AnimatedText
            text="About"
            className="text-sm text-accent-glow tracking-widest uppercase mb-4"
            delay={0}
            type="chars"
          />
          <AnimatedText
            text="Turning Vision Into Reality"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight max-w-4xl"
            delay={0.2}
            staggerDelay={0.02}
            type="words"
          />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left column - Bio */}
          <motion.div
            style={{ opacity }}
          >
            <AnimatedLine delay={0.3}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
                I&apos;m a creative developer and designer based in San Francisco,
                passionate about crafting digital experiences that leave lasting
                impressions. With over 7 years of experience, I specialize in
                bridging the gap between design and technology.
              </p>
            </AnimatedLine>
            <AnimatedLine delay={0.5}>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                My approach combines strategic thinking with meticulous attention
                to detail. I believe every pixel matters and every interaction
                should feel intentional. From concept to deployment, I ensure
                each project exceeds expectations.
              </p>
            </AnimatedLine>
            <AnimatedLine delay={0.7}>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Three.js", "Framer Motion", "GSAP", "Figma", "Node.js"].map(
                  (tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm glass text-text-secondary hover:text-white hover:border-accent-glow/30 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </AnimatedLine>
          </motion.div>

          {/* Right column - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AC</span>
                  </div>
                  <p className="text-text-muted text-sm">Alex Chen</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-8 left-8 w-12 h-12 border border-accent-glow/20 rounded-lg rotate-45" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group p-6 rounded-2xl glass hover:bg-white/[0.05] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-glow/10 flex items-center justify-center mb-4 group-hover:bg-accent-glow/20 transition-colors duration-300">
                <service.icon size={22} className="text-accent-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
