"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const portfolioItems = [
  {
    title: "Attendance App",
    description: "Screenshot preview of the attendance app experience.",
    image: "/images/portofolio/absensi.png",
  },
  {
    title: "Company Profile",
    description:
      "A polished company profile website built for modern branding.",
    image: "/images/portofolio/company.png",
  },
  {
    title: "Payment App",
    description: "Mobile payment interface made with React Native.",
    image: "/images/portofolio/psp.png",
  },
  {
    title: "Dashboard Admin",
    description: "Admin dashboard layout focused on clarity and analytics.",
    image: "/images/portofolio/admin.png",
  },
];

export default function PreviewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = portfolioItems[activeIndex];

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + portfolioItems.length) % portfolioItems.length,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % portfolioItems.length);
  };

  return (
    <main className="relative min-h-screen overflow-hidden preview-bg text-white">
      <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-slate-950 via-transparent to-slate-950"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm mb-3">
              Portfolio Preview
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              View My Work in Motion
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    width={1200}
                    height={800}
                    className="h-[420px] w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex-1">
              <p className="text-cyan-100 uppercase tracking-[0.35em] text-sm mb-4">
                Screenshot gallery
              </p>
              <h2 className="text-3xl font-bold text-white mb-4">
                {activeItem.title}
              </h2>
              <p className="text-slate-200 leading-relaxed mb-8">
                {activeItem.description}
              </p>
              <div className="flex items-center gap-3 mb-8">
                <button
                  onClick={previous}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/20 transition"
                >
                  <FaChevronRight />
                </button>
                <span className="ml-4 text-sm text-cyan-200">
                  {activeIndex + 1} / {portfolioItems.length}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {portfolioItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-3xl border p-2 transition ${index === activeIndex ? "border-cyan-300 bg-cyan-500/10" : "border-white/10 bg-white/5 hover:border-cyan-200"}`}
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Tap to preview
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
