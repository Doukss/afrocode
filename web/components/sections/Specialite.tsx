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
    <section className="w-full min-h-screen overflow-x-clip bg-gradient-to-br from-[#000f1f] via-[#021a35] to-[#000f1f] px-4 py-14 sm:py-16">
      {/* TITRES */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h1 className="text-sm font-extrabold text-gray-500 md:text-lg">
          Ce que je préfère résoudre
        </h1>

        <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Ma spécialité
        </h1>
      </motion.div>

      {/* CARDS */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {/* CARD 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          className="group relative h-full min-h-[320px] w-full rounded-2xl bg-gradient-to-br from-violet-500/50 via-purple-500/30 to-pink-500/50 p-[1px]"
        >
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500"></div>

          <div className="relative z-10 flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl sm:p-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 text-white text-xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">01</span>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.18em] text-violet-400 sm:text-base md:text-lg md:tracking-widest">
                Core Web Vitals
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold mt-2">
                Performance
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-400 md:text-base">
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
          className="group relative h-full min-h-[320px] w-full rounded-2xl bg-gradient-to-br from-[#90DBF4]/50 via-[#8EECF5]/30 to-[#98F5E1]/50 p-[1px]"
        >
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-[#90DBF4] via-[#8EECF5] to-[#98F5E1]"></div>

          <div className="relative z-10 flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl sm:p-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#90DBF4] to-[#146a72] text-white text-xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">02</span>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.18em] text-[#98F5E1] sm:text-base md:text-lg md:tracking-widest">
                Architecture scalable
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold mt-2">
                Microservices
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-400 md:text-base">
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
          className="group relative h-full min-h-[320px] w-full rounded-2xl bg-gradient-to-br from-[#ee9b00]/50 via-[#CA6702]/30 to-[#BB3E03]/50 p-[1px]"
        >
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-[#ee9b00] via-[#CA6702] to-[#BB3E03]"></div>

          <div className="relative z-10 flex h-full w-full flex-col justify-between rounded-2xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl sm:p-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f7b945] to-[#5f471a] text-white text-xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">03</span>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.18em] text-[#f7b945] sm:text-base md:text-lg md:tracking-widest">
                Design UI/UX
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold mt-2">
                Expérience utilisateur
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-400 md:text-base">
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
