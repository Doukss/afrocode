"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-[#000f1f]">

      {/* Glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4CC9F0] opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-lg"
      >
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Un projet en tête ?
        </h2>

        {/* Texte */}
        <p className="text-gray-300 text-lg mb-8">
          Je conçois et développe des applications modernes, performantes et adaptées à vos besoins.  
          Discutons ensemble de votre prochain projet.
        </p>

        {/* Boutons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">

          {/* Bouton principal */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg"
          >
            Me contacter
          </motion.a>

          {/* Bouton secondaire */}
          <motion.a
            href="/cv.pdf" // ajoute ton CV dans public/
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10"
          >
            Télécharger mon CV
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}