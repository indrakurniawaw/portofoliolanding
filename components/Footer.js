"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Bagian atas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Indra Kurniawan
            </h2>
            <p className="text-gray-400">
              Frontend Developer | Building modern web apps with Next.js,
              React.js, Vue.js, React Native, and Tailwind.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-white transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosmed */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/indrakurniawaw"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/indra-kurniawan-24a788134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                📧{" "}
                <a
                  href="mailto:indrakurniawant3@gmail.com"
                  className="hover:text-white transition"
                >
                  indrakurniawant3@gmail.com
                </a>
              </li>
              <li>
                📱{" "}
                <a
                  href="https://wa.me/6288233729512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +62 882 3372 9512
                </a>
              </li>
              <li>📍 Semarang, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Garis bawah */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Indra Kurniawan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
