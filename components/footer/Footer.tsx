"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ],
  Social: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Resume", href: "#" },
    { label: "Uses", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 md:py-24 border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-glow/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight font-general-sans">
                ALEX<span className="text-accent-glow">.</span>
              </span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Crafting digital experiences that blend creativity with technology.
              Based in San Francisco, available worldwide.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors duration-300 group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} className="text-text-muted group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
