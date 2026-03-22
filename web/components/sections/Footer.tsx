"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 py-10 bg-[#000814] border-t border-white/10">

      {/* Glow */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">

        {/* Logo / Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            CodeNivo
          </h2>
          <p className="text-gray-400 text-sm">
            Développeur Fullstack passionné, je conçois des solutions modernes et performantes.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-white font-semibold mb-2">Navigation</h3>

          <a href="#" className="text-gray-400 hover:text-white text-sm">
            Accueil
          </a>
          <a href="#projets" className="text-gray-400 hover:text-white text-sm">
            Projets
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white text-sm">
            Contact
          </a>
        </motion.div>

        {/* Réseaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white font-semibold mb-2">Réseaux</h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="px-4 py-2 border border-white/20 rounded-lg text-gray-300 hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-white/20 rounded-lg text-gray-300 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm relative z-10">
        © {new Date().getFullYear()} CodeNivo — Tous droits réservés
      </div>
    </footer>
  );
}