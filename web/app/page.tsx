import Image from "next/image";
import Hero from "../components/sections/Hero";
import About from "@/components/sections/About";
import Specialite from "@/components/sections/Specialite";
import MagicRings from "@/components/sections/Sologan"
import Skils from "@/components/sections/Skils";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <About/>
      <Specialite/>
      <MagicRings/>
      <Skils/>
    </div>
  );
}
