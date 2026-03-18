import Image from "next/image";
import Hero from "../components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <About/>
    </div>
  );
}
