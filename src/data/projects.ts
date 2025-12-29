// Project data for Portfolio - Scalable data layer

// Extended images for project detail modal
export interface ProjectDetailImages {
  hero: string;
  feature1: string;
  feature2: string;
}

export interface Project {
  id: string;
  title: string;
  type: "desktop" | "mobile";
  image: string; // Main image for work grid (backwards compatible)
  liveUrl?: string;
  color?: string; // Dominant color for ambient glow

  // NEW: Extended fields for project detail modal
  brief?: string; // The "War Story" - one punchy sentence
  description?: string; // Longer context
  stack?: string[]; // Tech stack array
  detailImages?: ProjectDetailImages; // Images for detail view
}

export const PROJECTS: Project[] = [
  // Desktop Projects
  {
    id: "legallease",
    title: "Ogodo & Co.",
    type: "desktop",
    image: "/images/desktop/legallease-1.png",
    color: "#f59e0b",
    brief:
      "Built a legal property SaaS with AES-encrypted PII and auto-generated Nigerian legal documents. 600+ line Prisma schema.",
    description:
      "A full-stack property management system for Nigerian legal practitioners. Features automated PDF generation for tenancy agreements and legal notices, encrypted storage of sensitive client data (BVN/NIN), and a comprehensive financial ledger with role-based access control and immutable audit logs.",
    stack: ["Next.js", "Prisma", "Supabase", "React-PDF"],
    detailImages: {
      hero: "/images/projects/legallease/hero.png",
      feature1: "/images/projects/legallease/feature-1.png",
      feature2: "/images/projects/legallease/feature-2.png",
    },
  },
  {
    id: "bankiiswap",
    title: "BankiiSwap",
    type: "desktop",
    image: "/images/desktop/bankii-1.png",
    liveUrl: "https://bankiiswap.com",
    color: "#3b82f6",
    brief:
      "Engineered a high-frequency DEX aggregator on Solana. Pivoted from a memecoin dashboard to full DeFi utility in 14 days.",
    description:
      "The DeFi heart of the Bankii Ecosystem. A Solana-based decentralized exchange aggregator with real-time price feeds and optimized swap routing.",
    stack: ["Next.js", "Solana", "Tailwind", "Zustand"],
    detailImages: {
      hero: "/images/projects/bankii/hero.png",
      feature1: "/images/projects/bankii/feature-1.png",
      feature2: "/images/projects/bankii/feature-2.png",
    },
  },
  {
    id: "sophex",
    title: "SOPHEX",
    type: "desktop",
    image: "/images/desktop/sophex-1.png",
    liveUrl: "https://sophex.io",
    color: "#f43f5e",
    brief:
      "Gamified Web3 whitelist distribution with fraud-proof device fingerprinting. Distributed 2,458+ NFT spots with zero exploits.",
    description:
      "Spin-to-win gamification system with anti-fraud device fingerprinting, rate limiting, and session persistence for secure NFT whitelist distribution.",
    stack: ["Next.js", "FingerprintJS", "MongoDB", "Redis"],
    detailImages: {
      hero: "/images/projects/sophex/hero.png",
      feature1: "/images/projects/sophex/feature-1.png",
      feature2: "/images/projects/sophex/feature-2.png",
    },
  },
  {
    id: "globnfts",
    title: "GlobNFTs",
    type: "desktop",
    image: "/images/desktop/glob-1.png",
    liveUrl: "https://globnfts.com",
    color: "#8b5cf6",
    brief:
      "Built a secure, invite-only viral growth engine with real-time blockchain auth. Gamified leaderboard with multi-platform social verification.",
    description:
      "Web3 whitelist distribution platform with device-level fraud prevention, Twitter OAuth integration, and automated invite replenishment system.",
    stack: ["Next.js", "Ethereum", "SIWE", "MongoDB"],
    detailImages: {
      hero: "/images/projects/glob/hero.png",
      feature1: "/images/projects/glob/feature-1.png",
      feature2: "/images/projects/glob/feature-2.png",
    },
  },
  {
    id: "saver-ai",
    title: "Saver AI",
    type: "desktop",
    image: "/images/desktop/saver-1.png",
    liveUrl: "https://saver-ai.com",
    color: "#10b981",
    brief:
      "Enterprise HSE platform using AI to predict workplace risks. Real-time dashboards handling thousands of sensor events.",
    description:
      "AI-powered Health, Safety & Environment platform with predictive risk analysis, automated compliance tracking, and real-time incident monitoring.",
    stack: ["Next.js", "OpenAI", "Tremor", "Supabase"],
    detailImages: {
      hero: "/images/projects/saver/hero.png",
      feature1: "/images/projects/saver/feature-1.png",
      feature2: "/images/projects/saver/feature-2.png",
    },
  },

  // Mobile Projects
  {
    id: "gramacot",
    title: "Gramacot Treatz",
    type: "mobile",
    image: "/images/mobile/gramacots-mobile-1.png",
    liveUrl: "https://gramacot.com",
    color: "#eab308",
    brief:
      "Built a high-conversion food delivery flow for Lagos' top caterer. Zero-friction checkout increased orders by 40%.",
    description:
      "Premium catering platform with 6+ curated packages, 3-step order flow, and instant WhatsApp ordering—reducing customer inquiry friction to under 30 seconds.",
    stack: ["Next.js", "Framer Motion", "Resend", "Paystack"],
    detailImages: {
      hero: "/images/projects/gramacot/hero.png",
      feature1: "/images/projects/gramacot/feature-1.png",
      feature2: "/images/projects/gramacot/feature-2.png",
    },
  },
  {
    id: "ethovia",
    title: "Ethovia",
    type: "mobile",
    image: "/images/mobile/ethovia-mobile-1.png",
    color: "#06b6d4",
    brief:
      "Web3 community platform connecting crypto enthusiasts. Real-time feeds with blockchain-verified identity.",
    description:
      "Social platform for the Web3 community with verified wallet connections, community feeds, and event coordination.",
    stack: ["Next.js", "Ethereum", "Tailwind", "Prisma"],
    detailImages: {
      hero: "/images/projects/ethovia/hero.png",
      feature1: "/images/projects/ethovia/feature-1.png",
      feature2: "/images/projects/ethovia/feature-2.png",
    },
  },
  {
    id: "new-era",
    title: "New Era Prints",
    type: "mobile",
    image: "/images/mobile/newera-mobile-1.png",
    liveUrl: "https://neweraprints.vercel.app",
    color: "#f97316",
    brief:
      "Built a premium e-commerce printing platform with real-time quote generation. Custom product configurator with instant pricing.",
    description:
      "Custom printing services platform featuring t-shirts, business cards, and banners with dynamic pricing, cart management, and seamless checkout flow.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    detailImages: {
      hero: "/images/projects/newera/hero.png",
      feature1: "/images/projects/newera/feature-1.png",
      feature2: "/images/projects/newera/feature-2.png",
    },
  },
];

// Helper function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

// Helper function to get project colors for gradient effects
export function getProjectColors(): { id: string; color: string }[] {
  return PROJECTS.filter((p) => p.color).map(({ id, color }) => ({
    id,
    color: color!,
  }));
}

// Helper to get projects with full detail data (for modal views)
export function getProjectsWithDetails(): Project[] {
  return PROJECTS.filter((p) => p.brief && p.detailImages);
}
