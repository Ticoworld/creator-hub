import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGithub,
} from "react-icons/si";

export interface StackItem {
  id: string;
  name: string;
  image?: string;
  images?: string[];
  icon?: IconType;
  icons?: IconType[];
  span: string;
  isLaptop?: boolean;
}

export const STACK: StackItem[] = [
  // The Machine (Full Width)
  {
    id: "laptop",
    name: "HP EliteBook",
    image: "/images/stack/laptop-void.jpg",
    span: "col-span-2 md:col-span-4",
    isLaptop: true,
  },
  // Frameworks (Monochrome icons)
  {
    id: "next",
    name: "Next.js 15",
    icon: SiNextdotjs,
    span: "col-span-1",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: SiSupabase,
    span: "col-span-1",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    span: "col-span-1",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    span: "col-span-1",
  },
  // AI Tools
  {
    id: "ai-tools",
    name: "Tools",
    images: [
      "/images/stack/cursor.png",
      "/images/stack/antigravity.png",
      "/images/stack/copilot.png",
    ],
    span: "col-span-2 md:col-span-2",
  },
  // Shipping
  {
    id: "ship",
    name: "Source & Ship",
    icons: [SiGithub, SiVercel],
    span: "col-span-2 md:col-span-2",
  },
];
