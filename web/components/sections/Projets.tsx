"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";

const categories = ["Tous", "Fullstack", "UI/UX", "Backend"];

export default function Projets() {
  const [active, setActive] = useState("Tous");
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent, id: number) => {
    if ((e.target as HTMLElement).closest(".github-btn")) {
      return;
    }
    router.push(`/projets/${id}`);
  };

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
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              onClick={(e) => handleCardClick(e, project.id)}
              className="relative group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/30 p-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-slate-900/50 cursor-pointer sm:p-5"
            >
              {/* IMAGE */}
              <div className="relative mb-4 h-48 overflow-hidden rounded-xl bg-slate-950/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* TITLE */}
              <h3 className="mb-2 break-words text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/5 border border-white/10 text-blue-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
                {(project.category === "Fullstack" || project.category === "UI/UX") && (
                  <Link
                    href={`/projets/${project.id}`}
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-950 transition duration-200 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] text-center flex items-center justify-center flex-1"
                  >
                    Voir projet
                  </Link>
                )}
                {project.category === "Backend" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition duration-200 hover:bg-white/10 hover:text-white text-center flex items-center justify-center flex-1"
                  >
                    Code
                  </a>
                )}
              </div>

              {/* Subtle background glow hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
