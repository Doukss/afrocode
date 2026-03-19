"use client";
import ProfileCard from "../ui/ProfileCard";
export default function About() {
  return (
    <section className="bg-[#000f1f] w-full h-screen flex items-center justify-center">
      <div className="w-[90%] h-[90%] rounded-2xl border-4 border-[#6818A5] shadow-[0_0_40px_#6818A5]">
        <div className="flex justify-around items-center h-full">
          <div className="w-lg">
            <h1 className="text-white text-5xl">À propos</h1>
            <p className="mt-4 text-lg md:text-xl text-white font-light">
              Je suis un développeur passionné par la création d'expériences web
              innovantes et performantes. Avec une expertise en développement
              full stack et en architecture SaaS, je transforme des idées
              complexes en solutions digitales fluides et efficaces. Mon
              objectif est de donner vie à votre vision à travers des projets
              qui allient créativité, technologie et performance.
            </p>
            <div className="flex justify-between py-6">
              <div>
                <div className="text-white text-5xl">
                  20<span className="text-violet-500">+</span>
                  <p className="text-lg">projet terminé</p>
                </div>
              </div>
              <div>
                <div className="text-white text-5xl">
                  3<span className="text-violet-500">+</span>
                  <p className="text-lg">Année d'expérience</p>
                </div>
              </div>
              <div>
                <div className="text-white text-5xl">
                  15<span className="text-violet-500">+</span>
                  <p className="text-lg">clients satisfaits</p>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-2xl font-extralight">
              Travailler avec le coeur, créer avec l'esprit.
            </p>
          </div>

          <div className="w-lg">
            <ProfileCard
              name="Malick Mbodji"
              title="Software Engineer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/milk.jpg"
              miniAvatarUrl="/milk.jpg" // ✅ AJOUT
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              behindGlowSize={300} // ✅ AJOUT
              iconUrl="/assets/demo/iconpattern.png"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
