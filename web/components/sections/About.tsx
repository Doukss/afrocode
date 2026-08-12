"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#000f1f] w-full min-h-screen flex items-center justify-center px-4 py-12 overflow-x-clip">
      <div className="w-full max-w-7xl rounded-3xl border border-white/10 bg-slate-950/30 backdrop-blur-md p-6 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background gradient glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#6818A5]/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* TEXTE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              À propos
            </h1>

            <p className="mt-4 text-base md:text-lg text-white font-light leading-relaxed">
              Je suis un développeur passionné par la création d&apos;expériences
              web innovantes et performantes. Avec une expertise en
              développement full stack et en architecture SaaS, je transforme
              des idées complexes en solutions digitales fluides et efficaces.
              Mon objectif est de donner vie à votre vision à travers des
              projets qui allient créativité, technologie et performance.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              {[
                { value: "20+", label: "projets terminés" },
                { value: "3+", label: "années d&apos;expérience" },
                { value: "15+", label: "clients satisfaits" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-white"
                >
                  <h2 className="text-2xl md:text-4xl font-bold">
                    {item.value}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-400 mt-2">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-sm md:text-xl mt-8 font-extralight"
            >
              Travailler avec le cœur, créer avec l&apos;esprit.
            </motion.p>
          </motion.div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group w-full max-w-sm md:max-w-md aspect-[3/4] rounded-3xl border border-white/10 bg-slate-900/30 p-3 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-slate-900/50 shadow-2xl">
              {/* Subtle background glow hover */}
              <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl"></div>

              {/* Conteneur de l'image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950/40">
                <Image
                  src="/liki.png"
                  alt="Malick Mbodji"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Dégradés artistiques */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Status indicator (Top Right) */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] md:text-xs font-medium text-emerald-400">Disponible</span>
                </div>

                {/* Overlap Text Box (Bottom) */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md text-left">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-400">
                    Développeur Full Stack 
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1">
                    Malick Mbodji
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mt-1.5 leading-relaxed">
                    Création d&apos;applications performantes et d&apos;interfaces utilisateur d&apos;exception.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
