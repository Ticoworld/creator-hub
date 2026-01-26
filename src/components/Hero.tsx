"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/hooks/use-contact-modal";

export default function Hero() {
  const { onOpen } = useContactModal();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-zinc-800/20 via-zinc-700/10 to-zinc-800/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Available for work pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/50 px-4 py-2 backdrop-blur-md shadow-lg shadow-emerald-500/5 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-emerald-500/10 hover:-translate-y-0.5 hover:scale-[1.02] cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-1000" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          </span>
          <span className="text-sm font-medium text-zinc-300">
            Available for work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-5xl font-bold tracking-[-0.02em] text-zinc-100 md:text-6xl lg:text-7xl"
        >
          Building the digital future.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          Senior Frontend Systems Architect. Specializing in high-performance
          Next.js systems with sub-100ms response times and 99.9% uptime SLAs.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary button */}
          <button
            onClick={onOpen}
            className={cn(
              "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-medium text-zinc-950",
              "transition-all duration-200",
              "hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02]",
              "btn-active focus-ring"
            )}
          >
            <Mail className="h-4 w-4" />
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Secondary button */}
          <button
            className={cn(
              "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-6 font-medium text-zinc-100",
              "transition-all duration-200",
              "hover:bg-zinc-900 hover:border-zinc-700 hover:scale-[1.02]",
              "btn-active focus-ring"
            )}
          >
            View my work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
