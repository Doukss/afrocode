import Silk from "../ui/Silk";

const primaryCtaClassName =
  "inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-bold text-slate-950 transition duration-200 hover:scale-[1.02] hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto";

const secondaryCtaClassName =
  "inline-flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Silk
          speed={5}
          scale={1}
          color="#134074"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/50 via-slate-950/35 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center text-white sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200/80 sm:text-sm">
          Full Stack / SaaS / Experiences digitales
        </p>

        <h1
          id="hero-title"
          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-8xl lg:text-9xl"
        >
          Malick Mbodji
        </h1>

        <p className="mt-4 max-w-3xl text-base font-semibold text-slate-100 sm:text-lg md:text-2xl">
          Developpeur Full Stack, architecte SaaS et createur
          d&apos;experiences web utiles.
        </p>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
          Je transforme des idees complexes en produits web fluides, fiables et
          performants, penses pour soutenir une vraie ambition metier.
        </p>

        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a href="#projects" className={primaryCtaClassName}>
            Voir mes projets
          </a>
          <a href="#contact" className={secondaryCtaClassName}>
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
