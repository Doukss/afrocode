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
    <section className="relative w-full py-20 px-6 bg-[#000f1f]">

      {/* Glow background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-bold text-white">Parcours</h2>
        <p className="text-gray-400 mt-3">
          Mon évolution et mes expériences en développement.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Ligne verticale */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="w-full md:w-[45%] relative group">

              {/* Point timeline */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#000f1f] z-10"></div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

                <h3 className="text-xl font-semibold text-white mb-1">
                  {exp.title}
                </h3>

                <p className="text-blue-400 text-sm mb-1">
                  {exp.place}
                </p>

                <span className="text-gray-400 text-xs">
                  {exp.date}
                </span>

                <p className="text-gray-300 mt-3 text-sm">
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