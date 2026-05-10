"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechVentures",
    content: "Alex transformed our vision into a breathtaking digital experience. The attention to detail and creative approach exceeded all expectations. Our conversion rates increased by 340%.",
    rating: 5,
    avatar: "SM",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Creative Director, Studio Nine",
    content: "Working with Alex was an absolute pleasure. The animations and interactions are buttery smooth, and the performance optimization is remarkable. A true craftsman.",
    rating: 5,
    avatar: "JR",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Product Lead, Orbit AI",
    content: "The level of polish and sophistication Alex brings to every project is unmatched. Our platform feels alive and intuitive. Users love the experience.",
    rating: 5,
    avatar: "EC",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Founder, NovaStream",
    content: "Alex doesn't just write code — he creates art. The 3D elements and micro-interactions make our platform feel premium and futuristic.",
    rating: 5,
    avatar: "MT",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Design Lead, Aether Finance",
    content: "Collaborating with Alex felt like having a creative partner who truly understands design. The implementation was pixel-perfect and the animations are chef's kiss.",
    rating: 5,
    avatar: "LP",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 6,
    name: "David Kim",
    role: "CTO, Pulse Studio",
    content: "Alex's technical expertise combined with his design sensibility is rare. He delivered a complex real-time platform that performs flawlessly under heavy load.",
    rating: 5,
    avatar: "DK",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <div className="relative p-6 md:p-8 rounded-2xl glass hover:bg-white/[0.05] transition-all duration-500 h-full">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote size={40} className="text-accent-glow" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="text-accent-glow fill-accent-glow" />
          ))}
        </div>

        {/* Content */}
        <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-sm font-bold`}>
            {testimonial.avatar}
          </div>
          <div>
            <div className="font-medium text-sm">{testimonial.name}</div>
            <div className="text-xs text-text-muted">{testimonial.role}</div>
          </div>
        </div>

        {/* Hover glow */}
        <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-72 h-72 rounded-full bg-accent-purple/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <AnimatedText
            text="Testimonials"
            className="text-sm text-accent-glow tracking-widest uppercase mb-4"
            delay={0}
            type="chars"
          />
          <AnimatedText
            text="What Clients Say"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            delay={0.2}
            staggerDelay={0.02}
            type="words"
          />
          <motion.p
            className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Don&apos;t just take my word for it — hear from the people I&apos;ve had
            the pleasure of working with.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
