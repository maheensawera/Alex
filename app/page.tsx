"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
