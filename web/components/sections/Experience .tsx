"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Développeur Fullstack (Formation)",
    place: "École 221",
    date: "2024 - Présent",
    description:
      "Apprentissage du développement web et mobile avec réalisation de projets concrets en JavaScript, PHP et bases de données.",
  },
  {
    title: "Projet Gestion de stock",
    place: "Projet personnel",
    date: "2025",
    description:
      "Développement d’une application de gestion de stock avec interface moderne et gestion des données en localStorage.",
  },
  {
    title: "API REST Produits",
    place: "Projet académique",
    date: "2025",
    description:
      "Conception et développement d’une API REST avec Node.js et Prisma pour la gestion des produits.",
  },
];

export default function Experience() {
  return (
    <section className="relative w-full py-20 px-6 bg-[#000f1f] overflow-x-clip">

      {/* Glow background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
          Mon évolution et mes expériences
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Parcours</h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Ligne verticale */}
        <div className="absolute left-4 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`mb-12 flex w-full relative group ${
              index % 2 === 0 ? "md:justify-start justify-start" : "md:justify-end justify-start"
            }`}
          >
            {/* Point timeline */}
            <div className="absolute top-6 left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#000f1f] z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-purple-500"></div>

            {/* Card Container */}
            <div className="w-full md:w-[45%] pl-10 md:pl-0">
              {/* Card content */}
              <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-white/15 hover:bg-slate-900/50 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-white mb-1 transition-colors group-hover:text-blue-400">
                  {exp.title}
                </h3>

                <p className="text-blue-400 font-medium text-sm mb-1">
                  {exp.place}
                </p>

                <span className="text-gray-500 text-xs font-semibold">
                  {exp.date}
                </span>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}