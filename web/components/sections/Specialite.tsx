"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Layout } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

export default function Specialite() {
  return (
    <section className="w-full min-h-screen overflow-x-clip bg-gradient-to-br from-[#000f1f] via-[#021a35] to-[#000f1f] px-4 py-14 sm:py-16">
      {/* TITRES */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
          Ce que je préfère résoudre
        </span>

        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Ma spécialité
        </h2>
      </motion.div>

      {/* CARDS */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {/* CARD 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="group relative flex h-full min-h-[320px] w-full flex-col justify-between rounded-2xl border border-white/5 bg-slate-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-slate-950/60 sm:p-6"
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 transition-colors group-hover:bg-violet-500/20">
              <Zap className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-gray-600 text-sm font-semibold">01</span>
          </div>

          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Core Web Vitals
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
              Performance
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Chargement sub-seconde et fluidité absolue — sur mobile comme
              sur desktop. Je traque chaque milliseconde pour une expérience
              sans friction.
            </p>
          </div>

          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 -z-10 w-24 h-24 bg-violet-500/5 blur-2xl rounded-full transition-opacity group-hover:bg-violet-500/10"></div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="group relative flex h-full min-h-[320px] w-full flex-col justify-between rounded-2xl border border-white/5 bg-slate-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-slate-950/60 sm:p-6"
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
              <Cpu className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-gray-600 text-sm font-semibold">02</span>
          </div>

          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Architecture scalable
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
              Microservices
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Des systèmes conçus pour évoluer sans limite. De la startup à
              l'entreprise, votre infrastructure grandit sans réécriture ni
              dette technique.
            </p>
          </div>

          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 -z-10 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full transition-opacity group-hover:bg-cyan-500/10"></div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="group relative flex h-full min-h-[320px] w-full flex-col justify-between rounded-2xl border border-white/5 bg-slate-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-slate-950/60 sm:p-6"
        >
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 transition-colors group-hover:bg-amber-500/20">
              <Layout className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span className="text-gray-600 text-sm font-semibold">03</span>
          </div>

          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Design UI/UX
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
              Expérience utilisateur
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Des interfaces intuitives qui attirent et fidélisent.
              Je conçois des expériences cohérentes où chaque clic a du sens.
            </p>
          </div>

          {/* Subtle accent light */}
          <div className="absolute top-0 right-0 -z-10 w-24 h-24 bg-amber-500/5 blur-2xl rounded-full transition-opacity group-hover:bg-amber-500/10"></div>
        </motion.div>
      </div>
    </section>
  );
}
