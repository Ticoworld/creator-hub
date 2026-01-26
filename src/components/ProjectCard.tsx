"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  project,
  index,
  className,
  onClick,
}: ProjectCardProps) {
  const isDesktop = project.type === "desktop";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className={cn("relative cursor-pointer group", className)}
      onClick={onClick}
    >
      {/* The Stage - Optimized for GPU */}
      <div
        className={cn(
          "relative w-full h-full overflow-hidden rounded-3xl bg-zinc-950",
          "border border-white/[0.08]",
          "transition-[border-color] duration-200",
          "group-hover:border-white/20",
        )}
      >
        {/* Static Shadow - No animation */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl",
            isDesktop ? "bottom-10 w-[70%] h-3" : "bottom-16 w-[60%] h-2",
          )}
        />

        {/* The Image Container - GPU-accelerated with composite layer */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "transition-transform duration-300 ease-out",
            "will-change-transform transform-gpu",
            isDesktop
              ? "group-hover:-translate-y-4"
              : "group-hover:-translate-y-2",
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={cn(
              "object-cover transform-gpu",
              isDesktop && "scale-100",
              !isDesktop &&
                "rotate-[-24deg] translate-y-[30%] translate-x-[25%] scale-[1.35]",
            )}
            priority={index < 4}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* The Smart Pill - Perfect circle that expands */}
        <div
          className={cn(
            "absolute bottom-6 left-6 z-20",
            "flex items-center gap-0 group-hover:gap-2",
            "bg-black/70 rounded-full backdrop-blur-sm",
            "h-11 w-11 group-hover:w-auto",
            "border border-white/10",
            "transition-[width,gap,border-color,padding] duration-300 ease-out",
            "will-change-transform",
            "group-hover:border-white/30 group-hover:pl-3 group-hover:pr-4",
            "justify-center group-hover:justify-start"
          )}
        >
          {/* Arrow Icon */}
          <ArrowUpRight className="w-5 h-5 text-white flex-shrink-0" />

          {/* Text - fades in */}
          <span
            className={cn(
              "text-white text-sm font-medium whitespace-nowrap",
              "max-w-0 opacity-0 overflow-hidden",
              "transition-[max-width,opacity] duration-300 ease-out",
              "group-hover:max-w-xs group-hover:opacity-100",
            )}
          >
            {project.title}
          </span>
        </div>

        {/* Ambient Glow */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none",
            "opacity-0 transition-opacity duration-200",
            "group-hover:opacity-100",
          )}
        />
      </div>
    </motion.div>
  );
}
