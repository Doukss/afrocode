export default function Specialite() {
  return (
    <section className="bg-gradient-to-br from-[#000f1f] via-[#021a35] to-[#000f1f] w-full h-screen">
      <div className="flex items-center justify-center p-10">
        <h1 className="text-lg font-extrabold text-gray-600">
          Ce que je préfère résoudre
        </h1>
      </div>

      <div className="flex items-center justify-center p-5">
        <h1 className="text-5xl font-extrabold text-white">Ma spécialité</h1>
      </div>

      <div className="flex justify-around w-full p-12">
        <div className="group relative w-[500px] h-[350px] rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/50 via-purple-500/30 to-pink-500/50 hover:scale-105 transition duration-500">
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500"></div>

          <div className="relative z-10 h-full w-full rounded-2xl bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 text-white text-2xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">01</span>
            </div>
            <div>
              <span className="text-lg tracking-widest text-violet-400 uppercase">
                Core Web Vitals
              </span>
              <h3 className="text-white text-2xl font-semibold mt-2">
                Performance
              </h3>
              <p className="text-gray-400 mt-4 text-xl leading-relaxed">
                Chargement sub-seconde et fluidité absolue — sur mobile comme
                sur desktop. Je traque chaque milliseconde pour une expérience
                sans friction.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative w-[500px] h-[350px] rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/50 via-purple-500/30 to-pink-500/50 hover:scale-105 transition duration-500">
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-[#90DBF4] via-[#8EECF5] to-[#98F5E1]"></div>

          <div className="relative z-10 h-full w-full rounded-2xl bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#90DBF4] to-[#146a72] text-white text-2xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">02</span>
            </div>
            <div>
              <span className="text-lg tracking-widest text-[#98F5E1] uppercase">
                ARCHITECTURE SCALABLE
              </span>
              <h3 className="text-white text-2xl font-semibold mt-2">
                Microservices & montée en charge
              </h3>
              <p className="text-gray-400  mt-4 text-xl leading-relaxed">
                Des systèmes conçus pour évoluer sans limite. De la startup à
                l'entreprise, votre infrastructure grandit sans réécriture ni
                dette technique.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative w-[500px] h-[350px] rounded-2xl p-[1px] bg-gradient-to-br from-violet-500/50 via-purple-500/30 to-pink-500/50 hover:scale-105 transition duration-500">
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition bg-gradient-to-br from-[#ee9b00] via-[#CA6702] to-[#BB3E03]"></div>

          <div className="relative z-10 h-full w-full rounded-2xl bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f7b945] to-[#5f471a] text-white text-2xl shadow-lg">
                ⚡
              </div>
              <span className="text-gray-500 text-sm">03</span>
            </div>
            <div>
              <span className="text-lg tracking-widest text-[#f7b945] uppercase">
                DESIGN D'INTERFACE
              </span>
              <h3 className="text-white text-2xl font-semibold mt-2">
                UX · Design System · Accessibilité
              </h3>
              <p className="text-gray-400 mt-2  mt-4 text-xl leading-relaxed">
                Des interfaces intuitives qui attirent et fidélisent. Je conçois
                des expériences cohérentes où chaque clic a du sens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
