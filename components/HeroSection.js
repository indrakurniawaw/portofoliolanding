"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 text-slate-900">
      <div className="absolute inset-0 hero-glow"></div>
      <div className="absolute -left-24 top-24 w-72 h-72 rounded-full bg-sky-300/30 animate-float"></div>
      <div className="absolute right-0 top-20 w-80 h-80 rounded-full bg-sky-200/30 animate-float animation-delay-2000"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen">
        <div className="w-full lg:w-1/2 px-8 py-16 lg:px-16 lg:py-24">
          <p className="uppercase tracking-[0.35em] text-sm text-cyan-200/80 mb-6">
            Creative Developer
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            Indra Kurniawan
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-cyan-100/90 mb-8">
            I build vibrant, polished digital experiences with modern frontend
            tools. From responsive layouts to dynamic animations, I bring ideas
            to life.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-10">
            <a
              href="#portfolio"
              className="rounded-full bg-sky-700 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-700/20 hover:scale-105 transition-transform"
            >
              View Portfolio
            </a>
            <a
              href="/preview"
              className="rounded-full border border-slate-300/30 px-6 py-3 text-slate-900 hover:bg-slate-100/60 transition"
            >
              Preview Screenshots
            </a>
          </div>
          <div className="flex items-center gap-5 text-2xl text-cyan-100">
            <a href="#" className="hover:text-white transition">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-8 py-16 lg:px-12 lg:py-24 flex justify-center items-center">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-slate-200/20 bg-white/50 p-6 backdrop-blur-xl shadow-2xl shadow-slate-950/12">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-sky-300 to-sky-400 opacity-20 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-slate-950/40">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={700}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-2xl shadow-slate-950/20">
          <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
          <p className="max-w-4xl text-slate-800 leading-relaxed text-base md:text-lg">
            Hi! I am Indra Kurniawan, a passionate Front-end Developer who loves
            polished interfaces and fluid interactions. I focus on responsive
            web apps with Next.js, React, React Native, Kotlin, and Tailwind
            CSS. Design, performance, and motion are the ingredients I use to
            create memorable digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
