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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 py-16">
  
  {/* NOM */}
  <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold mb-4 leading-tight">
    Malick Mbodji
  </h1>

  {/* TITRE */}
  <p className="mt-2 text-sm sm:text-base md:text-xl font-semibold max-w-xl">
    Développeur Full Stack · Architecte SaaS · Créateur d’expériences digitales
  </p>

  {/* DESCRIPTION */}
  <p className="mt-6 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-xl font-light leading-relaxed">
    Je transforme des idées complexes en expériences web fluides —
    innovation et performance au service de votre vision.
  </p>

  {/* BOUTONS */}
  <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
    
    <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-extrabold hover:scale-105 transition">
      Voir mes projets →
    </button>

    <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/10 transition">
      Me contacter
    </button>

  </div>
</div>
    </div>
  );
}
