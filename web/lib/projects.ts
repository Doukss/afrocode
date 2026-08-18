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
    image: "/DT.png",
    problemSolved: "La startup Dakar-Tech Wallet souhaite développer une plateforme pour gérer les flux financiers (transactions) de ses utilisateurs. Le système doit permettre aux clients de gérer leur portefeuille, d'effectuer des virements, de solliciter des prêts et de les rembourser de manière flexible. Pour l'administration, le système doit automatiser l'évaluation du risque de crédit des clients grâce à un score de solvabilité basé sur leur comportement de paiement.",
    detailedDescription: "Le système permettre aux clients de gérer leur portefeuille, d'effectuer des virements, de solliciter des prêts et de les rembourser de manière flexible. Pour l'administration, le système doit automatiser l'évaluation du risque de crédit des clients grâce à un score de solvabilité basé sur leur comportement de paiement.",
    projectUrl: "https://dakar-tech-front.vercel.app", // Remplacer par le lien réel s'il existe
    githubUrl: "https://github.com/javicodes/gestion-de-stock", // Remplacer par le lien github réel s'il existe
  },
  {
    id: 2,
    title: "API Produits",
    description: "API REST Node.js · Express · Prisma ORM · Architecture en couches",
    category: "Backend",
    tech: ["Node.js", "Prisma", "Express", "cloudinary", "TypeScript"],
    image: "/api.jpg",
    problemSolved: "EVENT 221 est un centre d'événements qui gère des espaces de réception, des prestataires de service, des clients et leurs réservations. Cette API REST fournit l'intégralité du back-end nécessaire au fonctionnement du système d'information du centre.",
    detailedDescription: "Une API REST hautement performante construite avec Node.js, Express et TypeScript. Elle intègre Prisma ORM pour une communication optimisée avec la base de données. L'API prend en charge l'authentification sécurisée par JWT, la validation stricte des schémas d'entrée, des filtres complexes (prix, catégorie, stock) et un système de pagination fluide.",
    projectUrl: "https://api-produits.onrender.com",
    githubUrl: "https://github.com/Doukss/even_221",
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
