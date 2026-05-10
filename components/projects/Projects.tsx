"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NeonVerse",
    category: "Web Application",
    description: "An immersive 3D metaverse platform built with Three.js and React. Features real-time collaboration, custom avatars, and spatial audio.",
    tags: ["React", "Three.js", "WebGL", "Socket.io"],
    color: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/20",
  },
  {
    id: 2,
    title: "Aether Finance",
    category: "Fintech Platform",
    description: "Next-generation DeFi dashboard with real-time market data, portfolio analytics, and seamless trading experience.",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
  },
  {
    id: 3,
    title: "Pulse Studio",
    category: "Creative Agency",
    description: "Award-winning creative agency website featuring WebGL transitions, smooth scroll animations, and dynamic content loading.",
    tags: ["GSAP", "WebGL", "Lenis", "React"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
  },
  {
    id: 4,
    title: "Orbit AI",
    category: "AI Platform",
    description: "Machine learning visualization platform that transforms complex data into beautiful, interactive visual narratives.",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    color: "from-emerald-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/20",
  },
  {
    id: 5,
    title: "Zenith Commerce",
    category: "E-commerce",
    description: "Premium e-commerce experience with 3D product viewers, AR try-on features, and seamless checkout flow.",
    tags: ["Next.js", "Stripe", "Three.js", "Prisma"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20",
  },
  {
    id: 6,
    title: "Nova Stream",
    category: "Streaming Platform",
    description: "High-performance video streaming platform with adaptive bitrate, live chat, and personalized recommendations.",
    tags: ["React", "Node.js", "WebRTC", "Redis"],
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <div
        className={`relative rounded-2xl overflow-hidden glass border ${project.borderColor} hover:border-opacity-40 transition-all duration-500`}
      >
        {/* Image/Visual area */}
        <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-4 w-16 h-16 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-8 h-8 rounded-lg border border-white/10 rotate-45"
            animate={{ rotate: [45, 135, 45] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs glass text-text-secondary">
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-glow transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs bg-white/5 text-text-muted border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-glow/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <AnimatedText
            text="Featured Work"
            className="text-sm text-accent-glow tracking-widest uppercase mb-4"
            delay={0}
            type="chars"
          />
          <AnimatedText
            text="Selected Projects"
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
            A curated collection of projects that showcase my expertise in
            creating exceptional digital experiences.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
