import Silk from "../ui/Silk";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <Silk
          speed={5}
          scale={1}
          color="#134074"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-9xl font-extrabold mb-4 ">
          Malick Mbodji
        </h1>

        <p className="mt-2 text-lg md:text-xl text-white font-semibold">
          Développeur Full Stack · Architecte SaaS · Créateur d’expériences
          digitales
        </p>

        <p className="mt-6 max-w-2xl text-white text-lg md:text-xl font-light">
          Je transforme des idées complexes en expériences web fluides —
          innovation et performance au service de votre vision.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-white text-black font-extrabold hover:scale-105 transition">
            Voir mes projets →
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/10 transition">
            Me contacter
          </button>
        </div>
      </div>
    </div>
  );
}
