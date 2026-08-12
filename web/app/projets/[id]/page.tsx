import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation de retour */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Retour aux projets
          </Link>
        </div>

        {/* Conteneur principal */}
        <article className="bg-slate-900/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Accent light decoration */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          
          {/* Header */}
          <header className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight">
              {project.title}
            </h1>
          </header>

          {/* Image du Projet */}
          <div className="relative w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden mb-8 border border-white/10 bg-slate-950/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Section Problème Résolu */}
          <div className="bg-blue-500/5 border border-blue-500/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
              <Sparkles className="w-5 h-5" />
              <h3>Le problème résolu</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Description détaillée */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              Détails du projet
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {project.detailedDescription}
            </p>
          </section>

          {/* Stack Technique */}
          <section className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              Stack technique
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs md:text-sm bg-white/5 border border-white/10 text-blue-300 px-4 py-1.5 rounded-full font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Boutons d'action */}
          <footer className="flex flex-col sm:flex-row gap-4 border-t border-white/10 pt-8 mt-8">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-bold text-slate-950 transition duration-200 hover:scale-[1.02] hover:bg-slate-100 flex-1"
            >
              <ExternalLink className="w-5 h-5" />
              Voir le projet
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-white/10 flex-1"
            >
              <Github className="w-5 h-5" />
              Code Source
            </a>
          </footer>
        </article>
      </div>
    </main>
  );
}
