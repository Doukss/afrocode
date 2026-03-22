"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Exemple de projets avec images
const projects = [
  {
    id: 1,
    title: "Gestion de stock",
    description: "Application web avec gestion complète des produits",
    category: "Fullstack",
    tech: ["JS", "Tailwind"],
    image: "/images/milk.png", // mettre le chemin de ton image
  },
  {
    id: 2,
    title: "API Produits",
    description: "API REST performante avec Node.js",
    category: "Backend",
    tech: ["Node.js", "Prisma"],
    image: "/images/api.png",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Interface moderne et responsive",
    category: "Frontend",
    tech: ["React", "Tailwind"],
    image: "/images/dashboard.png",
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
    <section className="relative w-full min-h-screen px-6 py-16 bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566]">
      {/* Glow background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-5xl font-bold text-white">Projets</h2>
        <p className="text-gray-300 mt-3">
          Une sélection de projets reflétant mes compétences et ma créativité.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex justify-center gap-4 flex-wrap mb-12 relative z-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileTap={{ scale: 0.9 }}
            className={`px-5 py-2 rounded-full backdrop-blur-lg border transition-all duration-300
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

      {/* Cartes */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
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
              className="relative group rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              {/* Card content */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 flex flex-col">
                {/* Image */}
                {project.image && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-semibold text-white mb-2 relative z-10">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 relative z-10">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto relative z-10">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
                    Voir projet
                  </button>
                  <button className="border border-white/20 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-white/10">
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
