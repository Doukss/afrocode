"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skils() {
  const tools = [
    { img: "vsc.png", title: "VS Code", desc: "Éditeur" },
    { img: "rea.png", title: "React", desc: "Framework" },
    { img: "ne.png", title: "Next.js", desc: "Framework" },
    { img: "tail.png", title: "Tailwind", desc: "Framework" },
    { img: "js.png", title: "JavaScript", desc: "Langage" },
    { img: "nod.png", title: "Node.js", desc: "Runtime" },
    { img: "git.png", title: "GitHub", desc: "Versioning" },
    { img: "fg.png", title: "Figma", desc: "Design" },
    { img: "ph.png", title: "PHP", desc: "Langage" },
    { img: "ai.png", title: "Illustrator", desc: "Design" },
    { img: "ff.png", title: "Firebase", desc: "Backend" },
    { img: "ht.png", title: "HTML", desc: "Langage" },
    { img: "css.png", title: "CSS", desc: "Langage" },
    { img: "vt.png", title: "Vite", desc: "Build tool" },
    { img: "ja.png", title: "Java", desc: "Langage" },
    { img: "sq.png", title: "MySQL", desc: "Database" },
  ];

  return (
    <section className="relative w-full overflow-x-clip bg-[#000f1f] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10 text-center sm:mb-12"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Outils et technologies
        </h2>
        <p className="text-base md:text-xl text-gray-400 mt-3">
          Mes compétences professionnelles
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08, // animation en cascade 🔥
            },
          },
        }}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.07 }}
            className="relative group flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg transition"
          >
            {/* Glow hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>

            {/* Icon */}
            <div className="bg-white/10 w-[60px] h-[60px] rounded-xl flex items-center justify-center z-10">
              <Image
                src={`/${tool.img}`}
                alt={tool.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <div className="z-10 min-w-0">
              <h3 className="break-words font-semibold text-white">{tool.title}</h3>
              <p className="text-sm text-gray-400">{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
