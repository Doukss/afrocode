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
    title: "Vita-link",
    description: "Plateforme d'urgence medicale",
    category: "UI/UX",
    tech: ["Figma"],
    image: "/vita.png",
    problemSolved: "Lors d’une urgence médicale — accident, accouchement difficile — le temps de recherche d’un donneur compatible est souvent trop long. Les banques de sang ne sont pas toujours à jour et les appels sur les réseaux sociaux sont désordonnés. Une plateforme de mise en relation immédiate entre les structures de santé et les donneurs de sang, pensée pour l’Afrique. Du premier appel à la transfusion validée.",
    detailedDescription: "Vita-Link se positionne comme la première plateforme locale de mise en relation urgente donneurshôpitaux — pensée pour les communautés sénégalaises, scalable pour le continent. La gamification Jambaar Life transforme chaque don en engagement durable. ",
    projectUrl: "https://www.figma.com/design/eLrU4YMS45xQDb2yhHJxP0/Vatalink?node-id=0-1&t=Zy00KzPDiLTZURQx-1",
    githubUrl: "https://github.com/javicodes/dashboard-ui",
  },
];
