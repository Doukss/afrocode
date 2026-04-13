"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Gestion de stock",
    description: "Application web complète avec gestion des produits",
    category: "Fullstack",
    tech: ["Tailwind", "Cloudinary", "TypeScript", "Next", "Prisma"],
    image: "/sk.jpg",
  },
  {
    id: 2,
    title: "API Produits",
    description: "API REST performante avec Node.js et Prisma",
    category: "Backend",
    tech: ["Node.js", "Prisma"],
    image: "/api.jpg",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Interface moderne et responsive",
    category: "Frontend",
    tech: ["React", "Tailwind"],
    image: "/dash.jpg",
  },
];

const categories = ["Tous", "Fullstack", "Frontend", "Backend"];

export default function Projets() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen overflow-x-clip bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] px-4 py-14 sm:px-6 sm:py-16"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-5xl">Projets</h2>
        <p className="mt-3 text-gray-300">
          Une sélection de projets reflétant mes compétences et ma créativité.
        </p>
      </div>

      {/* Filtres */}
      <div className="relative z-10 mb-10 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full border px-4 py-2 text-sm backdrop-blur-lg transition-all duration-300 sm:px-5
              ${
                active === cat
                  ? "bg-white/10 border-white text-white shadow-lg"
                  : "text-gray-300 border-white/20 hover:bg-white/10"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="relative z-10 mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-2xl bg-gradient-to-r from-blue-900 via-purple-700 to-pink-400 p-[1px]"
            >
              {/* Card */}
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
                {/* IMAGE */}
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* TITLE */}
                <h3 className="mb-2 break-words text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <button className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm text-white hover:opacity-90">
                    Voir projet
                  </button>
                  <button className="rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-300 hover:bg-white/10">
                    Code
                  </button>
                </div>
              </div>

              {/* Glow hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
