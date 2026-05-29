"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortofolioSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            history.replaceState(null, "", `/#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="transition-colors duration-500 ease-in-out bg-slate-950 text-white">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <Footer />
    </div>
  );
}
