export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  image: string;
  problemSolved: string;
  detailedDescription: string;
  projectUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion bancaire",
    description: "Application de Gestion Financière",
    category: "Fullstack",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    image: "/sk.jpg",
    problemSolved: "Les commerçants et PME perdent souvent un temps précieux à suivre manuellement leur inventaire via des feuilles de calcul obsolètes et sujettes aux erreurs. Cette application résout ce problème en centralisant la gestion des produits, en fournissant des alertes automatiques de stock bas en temps réel et en assurant un stockage multimédia cloud performant pour les visuels produits.",
    detailedDescription: "Une plateforme SaaS complète de gestion d'inventaire permettant aux professionnels de suivre leurs stocks en temps réel. Elle propose une interface d'administration épurée pour l'ajout, la modification et la suppression de produits, ainsi que des graphiques analytiques interactifs montrant les tendances d'entrées et de sorties. Les images sont compressées et gérées via l'intégration directe de Cloudinary API.",
    projectUrl: "https://stocky-inventaire.vercel.app", // Remplacer par le lien réel s'il existe
    githubUrl: "https://github.com/javicodes/gestion-de-stock", // Remplacer par le lien github réel s'il existe
  },
  {
    id: 2,
    title: "API Produits",
    description: "API REST performante avec Node.js et Prisma",
    category: "Backend",
    tech: ["Node.js", "Prisma", "Express", "TypeScript"],
    image: "/api.jpg",
    problemSolved: "Les applications web modernes nécessitent un point d'accès rapide, sécurisé et normalisé pour récupérer et manipuler les données produits sans latence. Cette API résout le besoin d'une infrastructure backend robuste capable de supporter des charges de trafic élevées tout en gérant l'authentification et les validations strictes.",
    detailedDescription: "Une API REST hautement performante construite avec Node.js, Express et TypeScript. Elle intègre Prisma ORM pour une communication optimisée avec la base de données. L'API prend en charge l'authentification sécurisée par JWT, la validation stricte des schémas d'entrée, des filtres complexes (prix, catégorie, stock) et un système de pagination fluide.",
    projectUrl: "https://api-produits.onrender.com",
    githubUrl: "https://github.com/javicodes/api-produits",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Interface moderne et responsive",
    category: "Frontend",
    tech: ["React", "Tailwind", "Framer Motion", "Recharts"],
    image: "/dash.jpg",
    problemSolved: "Les administrateurs système et gestionnaires font face à des flots de données brutes illisibles au quotidien. Ce dashboard résout ce problème de visualisation en traduisant les indicateurs clés (KPI) en graphiques clairs, dynamiques et interactifs, accessibles sur mobile comme sur desktop.",
    detailedDescription: "Une interface utilisateur (UI) de tableau de bord moderne axée sur l'ergonomie et la fluidité. Développé avec React et TailwindCSS, il intègre des graphiques de données complexes via Recharts, des contrôles de filtres dynamiques, un mode sombre natif et des animations fluides avec Framer Motion. La mise en page s'adapte automatiquement à toutes les résolutions d'écrans.",
    projectUrl: "https://dashboard-ui-demo.vercel.app",
    githubUrl: "https://github.com/javicodes/dashboard-ui",
  },
];
