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
          "group-hover:border-white/20"
        )}
      >
        {/* Static Shadow - No animation */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl",
            isDesktop ? "bottom-10 w-[70%] h-3" : "bottom-16 w-[60%] h-2"
          )}
        />

        {/* The Image Container - Simple GPU-friendly transform */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "transition-transform duration-200 ease-out",
            isDesktop
              ? "group-hover:-translate-y-4"
              : "group-hover:-translate-y-1.5"
          )}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={cn(
              "object-cover",
              isDesktop && "scale-100",
              !isDesktop &&
                "rotate-[-24deg] translate-y-[30%] translate-x-[25%] scale-[1.35]"
            )}
            priority={index < 4}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* The Smart Pill - Specific transitions only */}
        <div
          className={cn(
            "absolute bottom-6 left-6 z-20",
            "flex items-center gap-2 overflow-hidden",
            "bg-black/70 rounded-full",
            "py-3 pl-3 border border-white/10",
            "transition-[max-width,padding,border-color] duration-200 ease-out",
            "max-w-[3rem] pr-3",
            "group-hover:max-w-[20rem] group-hover:pr-4 group-hover:border-white/30"
          )}
        >
          {/* Text */}
          <span
            className={cn(
              "text-white text-sm font-medium whitespace-nowrap",
              "opacity-0 transition-opacity duration-200",
              "group-hover:opacity-100"
            )}
          >
            {project.title}
          </span>

          {/* Arrow Icon */}
          <ArrowUpRight className="w-5 h-5 text-white flex-shrink-0" />
        </div>

        {/* Ambient Glow */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none",
            "opacity-0 transition-opacity duration-200",
            "group-hover:opacity-100"
          )}
        />
      </div>
    </motion.div>
  );
}
