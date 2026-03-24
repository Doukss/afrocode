"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProfileCard from "../ui/ProfileCard";

export default function About() {
  return (
    <section className="bg-[#000f1f] w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl rounded-2xl border-4 border-[#6818A5] shadow-[0_0_40px_#6818A5] p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
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
                Je suis un développeur passionné par la création d'expériences
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
                  { value: "3+", label: "années d'expérience" },
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
                Travailler avec le cœur, créer avec l'esprit.
              </motion.p>
            </motion.div>
          

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-sm md:max-w-md flex justify-center">
              <ProfileCard
                name="Malick Mbodji"
                title="Software Engineer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/profile.jpg"
                miniAvatarUrl="/milk.jpg"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize={300}
                iconUrl="/assets/demo/iconpattern.png"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
