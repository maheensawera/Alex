"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Creative Developer",
    company: "Studio Futura",
    location: "San Francisco, CA",
    period: "2022 — Present",
    description: "Leading the creative development team, architecting immersive web experiences for Fortune 500 clients. Spearheading the adoption of WebGL and real-time 3D graphics.",
    highlights: ["Led 15+ award-winning projects", "Reduced load times by 60%", "Mentored team of 8 developers"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    role: "Lead Frontend Engineer",
    company: "TechNova Labs",
    location: "New York, NY",
    period: "2020 — 2022",
    description: "Architected and built a design system used across 12 products. Implemented advanced animation libraries and performance optimization strategies.",
    highlights: ["Built component library from scratch", "Improved DX significantly", "Open sourced 3 tools"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Digital Atelier",
    location: "London, UK",
    period: "2018 — 2020",
    description: "Developed custom e-commerce solutions and interactive marketing campaigns. Collaborated closely with designers to bring creative visions to life.",
    highlights: ["Shipped 30+ client projects", "Won Awwwards Site of the Day", "Established animation guidelines"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Creative Pulse",
    location: "Berlin, Germany",
    period: "2016 — 2018",
    description: "Started my journey building responsive websites and learning modern JavaScript frameworks. Discovered my passion for creative coding and motion design.",
    highlights: ["Learned React & Vue.js", "Built first WebGL experiment", "Contributed to open source"],
    color: "from-orange-500 to-red-500",
  },
];

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      className="relative pl-8 md:pl-0"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

      {/* Timeline dot */}
      <motion.div
        className={`absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-gradient-to-r ${experience.color} md:-translate-x-1.5`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {/* Content card */}
      <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
        <motion.div
          className="p-6 md:p-8 rounded-2xl glass hover:bg-white/[0.05] transition-all duration-500 group"
          whileHover={{ y: -5 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-accent-glow mb-1">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-accent-glow transition-colors duration-300">
                {experience.role}
              </h3>
              <div className="flex items-center gap-4 mt-1 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <Briefcase size={14} />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {experience.location}
                </span>
              </div>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight size={16} className="text-accent-glow" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-3 py-1 rounded-full text-xs bg-white/5 text-text-muted border border-white/5"
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-glow/5 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <AnimatedText
            text="Journey"
            className="text-sm text-accent-glow tracking-widest uppercase mb-4"
            delay={0}
            type="chars"
          />
          <AnimatedText
            text="Experience Timeline"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            delay={0.2}
            staggerDelay={0.02}
            type="words"
          />
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
