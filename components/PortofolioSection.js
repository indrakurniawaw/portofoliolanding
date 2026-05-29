"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

const portfolioItems = [
  {
    title: "Attendance App",
    description: "Built with React, Tailwind, and Firebase.",
    images: [
      "/images/portofolio/absensi.png",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    technologies: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "Company Profile",
    description: "Built using Next.js and Tailwind.",
    images: [
      "/images/portofolio/company.png",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    technologies: ["Next.js", "Tailwind"],
  },
  {
    title: "Payment App",
    description: "Developed using React Native.",
    images: [
      "/images/portofolio/psp.png",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    technologies: ["React Native"],
  },
  {
    title: "Dashboard Admin",
    description: "Developed using React Js.",
    images: [
      "/images/portofolio/admin.png",
      "/images/placeholder.svg",
      "/images/placeholder.svg",
    ],
    technologies: ["React"],
  },
];

export default function PortfolioSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-slate-950 text-white py-24 px-6" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.35em] mb-2">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">My Portfolio</h2>
          </div>
          <Link
            href="/preview"
            className="self-start rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition"
          >
            View Preview Gallery
          </Link>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 18px 40px rgba(14, 165, 233, 0.18)",
              }}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-xl cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <div className="overflow-hidden rounded-3xl mb-4 border border-white/10 bg-slate-800">
                {item.images && item.images[0] ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-52 bg-slate-700 flex items-center justify-center text-slate-300">
                    No image
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-cyan-100/80 mb-4">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <PortfolioModal
          open={!!selected}
          onClose={() => setSelected(null)}
          item={selected}
        />
      </div>
    </section>
  );
}
