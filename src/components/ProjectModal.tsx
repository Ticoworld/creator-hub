"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

// Stack icon mapping
const STACK_COLORS: Record<string, string> = {
  "Next.js": "bg-white/10 text-white",
  Solana: "bg-purple-500/20 text-purple-300",
  Tailwind: "bg-cyan-500/20 text-cyan-300",
  Zustand: "bg-orange-500/20 text-orange-300",
  "Framer Motion": "bg-pink-500/20 text-pink-300",
  Resend: "bg-blue-500/20 text-blue-300",
  Paystack: "bg-green-500/20 text-green-300",
  OpenAI: "bg-emerald-500/20 text-emerald-300",
  Tremor: "bg-indigo-500/20 text-indigo-300",
  Supabase: "bg-green-500/20 text-green-300",
  Ethereum: "bg-blue-500/20 text-blue-300",
  SIWE: "bg-violet-500/20 text-violet-300",
  MongoDB: "bg-green-500/20 text-green-300",
  FingerprintJS: "bg-orange-500/20 text-orange-300",
  Redis: "bg-red-500/20 text-red-300",
  React: "bg-cyan-500/20 text-cyan-300",
  Vite: "bg-yellow-500/20 text-yellow-300",
  Prisma: "bg-slate-500/20 text-slate-300",
};

interface ProjectModalProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

export default function ProjectModal({
  selectedId,
  setSelectedId,
}: ProjectModalProps) {
  // Find active project
  const project = selectedId ? PROJECTS.find((p) => p.id === selectedId) : null;

  // Close handler
  const handleClose = () => setSelectedId(null);

  // Lock body scroll when modal is open - optimized with CSS class
  useEffect(() => {
    if (selectedId) {
      document.body.classList.add('modal-open');
      return () => {
        document.body.classList.remove('modal-open');
      };
    }
  }, [selectedId]);

  // Ensure we don't try to access document on server, though selectedId usually guards this
  if (!selectedId || !project) return null;

  // Use createPortal to render outside of any parent transforms
  return createPortal(
    <>
      {/* Backdrop + Centering Container - GPU-accelerated */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm px-4 pt-4 pb-4 sm:items-center sm:p-4 md:pt-10"
        onClick={handleClose}
      >
        {/* Modal Card - Optimized animation (no scale, only translate + opacity) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.3, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.25 }
          }}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "relative w-full max-w-4xl max-h-[85vh] overflow-hidden",
            "rounded-3xl border border-white/10 bg-zinc-900",
            "flex flex-col",
            "mt-4 sm:mt-0",
            "will-change-transform transform-gpu"
          )}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className={cn(
              "absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center",
              "rounded-full bg-zinc-800/90 backdrop-blur-sm border border-white/20",
              "text-white transition-[background-color,transform,border-color] duration-200",
              "hover:bg-zinc-700 hover:scale-110 hover:border-white/40",
              "shadow-lg shadow-black/20"
            )}
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Scrollable Content - Smooth scroll with GPU acceleration */}
          <div className="flex-1 overflow-y-auto scroll-smooth overscroll-contain">
            {/* Hero Image */}
            {project.detailImages?.hero && (
              <div className="relative h-48 w-full sm:h-64 md:h-80">
                <Image
                  src={project.detailImages.hero}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
              </div>
            )}

            {/* Body - The Blueprint */}
            <div className="relative -mt-12 px-4 pb-6 sm:px-6 sm:pb-8 md:-mt-16 md:px-8">
              {/* Title Row */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl tracking-tight">
                    {project.title}
                  </h2>
                  {project.description && (
                    <p className="mt-3 text-sm text-zinc-400 sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>

                {/* Visit Live Button */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex shrink-0 w-fit items-center justify-center gap-2 rounded-full",
                      "bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900",
                      "transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.02]",
                      "shadow-lg shadow-black/20"
                    )}
                  >
                    Visit Live
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* War Story */}
              {project.brief && (
                <div className="mt-6 sm:mt-8 border-l-2 border-white/20 pl-4 sm:pl-6">
                  <p className="text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl font-medium italic">
                    &ldquo;{project.brief}&rdquo;
                  </p>
                </div>
              )}

              {/* Stack Icons */}
              {project.stack && project.stack.length > 0 && (
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "rounded-full px-4 py-1.5 text-xs font-semibold border",
                          STACK_COLORS[tech] || "bg-zinc-800 text-zinc-300 border-zinc-700"
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Feature Images - The Evidence */}
              {project.detailImages && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2">
                  {/* Feature 1 - Landscape */}
                  {project.detailImages.feature1 && (
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={project.detailImages.feature1}
                        alt={`${project.title} feature 1`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                    </div>
                  )}

                  {/* Feature 2 - Portrait/Mobile */}
                  {project.detailImages.feature2 && (
                    <div className="relative aspect-[9/16] max-h-[300px] overflow-hidden rounded-xl border border-white/10 sm:max-h-[400px] sm:aspect-auto sm:h-full">
                      <Image
                        src={project.detailImages.feature2}
                        alt={`${project.title} feature 2`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>,
    document.body
  );
}
