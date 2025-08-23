"use client";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Attendance App",
    description: "Built with React, Tailwind, and Firebase.",
    image: "/images/portofolio/absensi.png",
  },
  {
    title: "Company Profile",
    description: "Built using Next.js and Tailwind.",
    image: "/images/portofolio/company.png",
  },
  {
    title: "Payment App",
    description: "Developed using React Native.",
    image: "/images/portofolio/psp.png",
  },
  {
    title: "Dashboard Admin",
    description: "Developed using React Js.",
    image: "/images/portofolio/admin.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-white py-24 px-6" id="portfolio">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">My Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              //   transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                transition: { duration: 0.2, delay: 0 },
              }}
              className="bg-gray-50 p-4 rounded-lg transition duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
