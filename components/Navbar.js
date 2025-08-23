"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavbarScroll() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Tampilkan navbar saat scroll > 200
      if (scrollY > 200) {
        setShow(true);
      } else if (scrollY <= 50) {
        // Sembunyikan hanya saat posisi paling atas
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-40 text-white p-6 flex justify-end items-center space-x-8">
        <Link href="#home">Home</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#portfolio">Portfolio</Link>
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Me
        </button>
      </nav>
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-in-out ${
          show
            ? "translate-y-0 opacity-100 bg-black/70 shadow-md"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="p-4 flex justify-end items-center space-x-8 text-white">
          <Link href="#home">Home</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#portfolio">Portfolio</Link>
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
            Contact Me
          </button>
        </div>
      </nav>
    </>
  );
}
