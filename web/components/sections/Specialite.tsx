"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function Specialite() {
  return (
    <section className="bg-gradient-to-br from-[#000f1f] via-[#021a35] to-[#000f1f] w-full min-h-screen py-16 px-4">
      {/* TITRES */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="text-sm md:text-lg font-extrabold text-gray-500">
          Ce que je préfère résoudre
        </h1>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3">
          Ma spécialité
        </h1>
      </motion.div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
        {/* CARD 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="group relative w-full h-[350px] rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/50 via-purple-500/30 to-pink-500/50"
        >
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500"></div>

          <div className="relative z-10 h-full w-full rounded-2xl bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 text-white text-xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">01</span>
            </div>

            <div>
              <span className="text-sm md:text-lg tracking-widest text-violet-400 uppercase">
                Core Web Vitals
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold mt-2">
                Performance
              </h3>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                Chargement sub-seconde et fluidité absolue — sur mobile comme
                sur desktop. Je traque chaque milliseconde pour une expérience
                sans friction.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="group relative w-full h-[350px] rounded-2xl p-[1px] bg-gradient-to-br from-[#90DBF4]/50 via-[#8EECF5]/30 to-[#98F5E1]/50"
        >
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-[#90DBF4] via-[#8EECF5] to-[#98F5E1]"></div>

          <div className="relative z-10 h-full w-full rounded-2xl bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#90DBF4] to-[#146a72] text-white text-xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">02</span>
            </div>

            <div>
              <span className="text-sm md:text-lg tracking-widest text-[#98F5E1] uppercase">
                Architecture scalable
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold mt-2">
                Microservices
              </h3>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                Des systèmes conçus pour évoluer sans limite. De la startup à
                l&apos;entreprise, votre infrastructure grandit sans réécriture ni
                dette technique.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="group relative w-full h-[350px] rounded-2xl p-[1px] bg-gradient-to-br from-[#ee9b00]/50 via-[#CA6702]/30 to-[#BB3E03]/50"
        >
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-[#ee9b00] via-[#CA6702] to-[#BB3E03]"></div>

          <div className="relative z-10 h-full w-full rounded-2xl bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f7b945] to-[#5f471a] text-white text-xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">03</span>
            </div>

            <div>
              <span className="text-sm md:text-lg tracking-widest text-[#f7b945] uppercase">
                Design UI/UX
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold mt-2">
                Expérience utilisateur
              </h3>
              <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                Des interfaces intuitives qui attirent et fidélisent. 
                Je conçois des expériences cohérentes où chaque clic a du sens.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
