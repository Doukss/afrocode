import Image from "next/image";
import Link from "next/link";

export default function Skils() {
  return (
    <section className=" bg-[#000f1f] w-full h-screen">
      <h2 className="text-5xl text-white font-bold flex justify-center items-center p-4">
        Outils et technologies
      </h2>
      <p className="mb-8 text-2xl text-gray-600 flex justify-center items-center">
        Mes compétences professionnelles
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-14 text-2xl text-white">
        {[
          { img: "vsc.png", title: "VS Code", desc: "Éditeur" },
          { img: "rea.png", title: "React", desc: "Framework" },
          { img: "ne.png", title: "Next.js", desc: "Framework" },
          { img: "tail.png", title: "Tailwind", desc: "Framework" },
          { img: "js.png", title: "JavaScript", desc: "Langage" },
          { img: "nod.png", title: "Node.js", desc: "Runtime" },
          { img: "git.png", title: "GitHub", desc: "Versioning" },
          { img: "fg.png", title: "Figma", desc: "Design" },
          { img: "ph.png", title: "PHP", desc: "Langage" },
          { img: "ai.png", title: "Adobe Illustrator", desc: "Application de concep" },
          { img: "ff.png", title: "Firebase", desc: "Cadre" },
          { img: "ht.png", title: "HTML", desc: "Langage" },
          { img: "css.png", title: "CSS", desc: "Langage" },
          { img: "vt.png", title: "Vite", desc: "Cadre" },
          { img: "ja.png", title: "Java", desc: "Langage" },
          { img: "sq.png", title: "MySQL", desc: "Langage" },
        ].map((tool) => (
          <div
            key={tool.title}
            className="border border-gray-100/15 h-24 rounded-xl flex gap-4 p-3 items-center hover:bg-gray-50/5 transition"
          >
            <div className="bg-gray-100/5 w-[64px] h-[64px] rounded-xl flex items-center justify-center">
              <Image
                  src={`/${tool.img}`}
                  alt={tool.title}
                  width={48}
                  height={48}
                />
            </div>
            <div>
              <h3 className="font-bold">{tool.title}</h3>
              <p className="text-sm text-gray-400">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
