import MagicRings from "../ui/MagicRings";

export default function Sologan() {
  return (
    <section className="bg-[#000f1f] w-full h-screen relative">

      {/* 🎨 Background */}
      <div className="absolute inset-0">
        <MagicRings
          color="#fc42ff"
          colorTwo="#42fcff"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      {/* 📝 Texte centré */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Crée. Innove. Impacte.
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            De l’écoute du besoin à la livraison finale, je conçois et développe 
            des solutions performantes, testées et continuellement optimisées.
          </p>
        </div>
      </div>

    </section>
  );
}