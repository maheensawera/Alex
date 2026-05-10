"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Send, Mail, MapPin, Phone, ArrowUpRight, CheckCircle } from "lucide-react";

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-glow/10 via-transparent to-transparent blur-3xl"
        style={{ y, scale }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 text-center">
          <AnimatedText
            text="Let's Connect"
            className="text-sm text-accent-glow tracking-widest uppercase mb-4"
            delay={0}
            type="chars"
          />
          <AnimatedText
            text="Start a Project"
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight"
            delay={0.2}
            staggerDelay={0.02}
            type="words"
          />
          <motion.p
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Have a project in mind? Let&apos;s create something extraordinary together.
            I&apos;m always excited to work on innovative ideas.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-12">
              {[
                { icon: Mail, label: "Email", value: "hello@alexchen.dev", href: "mailto:hello@alexchen.dev" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-accent-glow/10 transition-colors duration-300">
                    <item.icon size={20} className="text-accent-glow" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">{item.label}</div>
                    <div className="text-white group-hover:text-accent-glow transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-accent-glow" />
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-text-muted mb-4">Follow me on</p>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-full glass text-sm text-text-secondary hover:text-white hover:border-accent-glow/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-text-muted mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-glow/50 transition-colors duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-glow/50 transition-colors duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted focus:outline-none focus:border-accent-glow/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-background font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
