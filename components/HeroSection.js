"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <div
        className="flex overflow-hidden"
        style={{ height: "calc(100vh - 192px)" }}
      >
        {/* Kiri */}
        <div className="w-1/2 bg-gray-100 flex flex-col justify-center p-16 z-10">
          <Image
            src="/LogoIT.png"
            alt="logoit"
            width={500}
            height={500}
            className="absolute opacity-10 -top-10 -left-10"
          />
          <div className="text-3xl font-bold mb-4 text-black">Hi, I am</div>
          <h1
            className="text-7xl font-extrabold text-black"
            data-aos="fade-up"
            data-aos-once="false"
          >
            Indra Kurniawan
          </h1>
          <p
            className="text-gray-500 mt-4 font-extrabold"
            data-aos="fade-up"
            data-aos-once="false"
          >
            Web / Mobile Developer
          </p>

          {/* Icon Sosmed */}
          <div className="flex space-x-6 mt-6 text-2xl text-gray-800">
            <a href="#">
              <FaEnvelope />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="w-3/4 relative flex items-center justify-center bg-gray-100">
          <div className="absolute inset-0 bg-neutral-900 clip-diagonal z-0"></div>
          <div className="z-10">
            <Image
              src="/images/profile.png"
              alt="Profile"
              width={600}
              height={900}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-48 bg-neutral-900 flex flex-row">
        <div className="text-white flex flex-col justify-start items-start p-12 space-x-6">
          <h2 className="text-2xl font-bold mb-2">Tentang Saya</h2>
          <p className="text-left max-w-5xl text-gray-300 text-sm">
            Hi! I'm Indra Kurniawan, a passionate Front-end Web Developer with a
            keen eye for clean, modern, and responsive user interfaces. I love
            turning creative ideas into functional websites and continuously
            explore the latest web technologies. Currently, I focus on building
            dynamic and fast web applications using Next.js, ReactJs, React
            Native, Kotlin and Tailwind CSS. I'm also enthusiastic about UI/UX
            design and believe that great design is just as important as great
            functionality.
          </p>
        </div>
        <div>
          <Image
            src="/LogoIT.png"
            alt="logoit"
            width={300}
            height={300}
            // className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
