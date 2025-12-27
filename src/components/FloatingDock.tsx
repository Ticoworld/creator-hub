"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Briefcase, Layers, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/hooks/use-contact-modal";

const dockItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Work", href: "/work" },
  { icon: Layers, label: "Stack", href: "/stack" },
];

export default function FloatingDock() {
  const { onOpen } = useContactModal();
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
        "flex items-center gap-1 px-2 py-2",
        "rounded-full border border-white/10",
        "bg-zinc-900/80 backdrop-blur-md",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      )}
    >
      {dockItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <motion.a
            key={item.label}
            href={item.href}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full",
              "transition-colors duration-200",
              isActive
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:bg-white/10 hover:text-white"
            )}
            title={item.label}
          >
            <item.icon className="h-5 w-5" />
          </motion.a>
        );
      })}
      {/* Contact button - opens modal instead of navigating */}
      <motion.button
        onClick={onOpen}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "text-zinc-400 transition-colors duration-200",
          "hover:bg-white/10 hover:text-white"
        )}
        title="Contact"
      >
        <Mail className="h-5 w-5" />
      </motion.button>
    </nav>
  );
}
