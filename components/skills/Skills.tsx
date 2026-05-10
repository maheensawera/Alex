"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Three.js / WebGL", level: 85 },
      { name: "Framer Motion", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "GraphQL", level: 85 },
      { name: "AWS / Cloud", level: 78 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Adobe Creative Suite", level: 85 },
      { name: "UI/UX Design", level: 90 },
      { name: "Motion Design", level: 88 },
      { name: "Brand Identity", level: 82 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Jest / Testing", level: 88 },
      { name: "Vercel / Netlify", level: 92 },
    ],
  },
];

const floatingIcons = [
  { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
  { icon: "🔷", x: "85%", y: "15%", delay: 1 },
  { icon: "🎨", x: "75%", y: "70%", delay: 2 },
  { icon: "⚡", x: "15%", y: "75%", delay: 3 },
  { icon: "🚀", x: "50%", y: "85%", delay: 1.5 },
  { icon: "💻", x: "90%", y: "50%", delay: 2.5 },
];

function SkillBar({ skill, index, isInView }: { skill: { name: string; level: number }; index: number; isInView: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-text-secondary">{skill.name}</span>
        <span className="text-sm text-text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.1,
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 md:py-40 overflow-hidden">
      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10 pointer-events-none select-none"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <AnimatedText
            text="Expertise"
            className="text-sm text-accent-glow tracking-widest uppercase mb-4"
            delay={0}
            type="chars"
          />
          <AnimatedText
            text="Skills & Technologies"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            delay={0.2}
            staggerDelay={0.02}
            type="words"
          />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="p-8 rounded-2xl glass"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: catIndex * 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-accent-glow">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={skillIndex + catIndex * 5}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Additional tech stack */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-text-muted mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Zustand", "Prisma", "MongoDB", "Redis", "Elasticsearch",
              "Kubernetes", "Terraform", "Storybook", "Cypress", "Playwright",
              "Svelte", "Vue.js", "Rust", "Go", "WebAssembly", "WebRTC",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-full text-sm glass text-text-secondary hover:text-white hover:border-accent-glow/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + i * 0.03, duration: 0.4 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
