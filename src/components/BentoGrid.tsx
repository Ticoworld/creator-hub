"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SiX } from "react-icons/si";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import Image from "next/image";
import BentoCard from "./BentoCard";
import TweetCard from "./bento/TweetCard";
import GithubGraph from "./bento/GithubGraph";
import { LiveTime } from "./ui/LiveTime";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/hooks/use-contact-modal";

// Tooltip component for tech stack icons with accessibility
function TechIcon({
  icon: Icon,
  name,
  hoverColor,
}: {
  icon: React.ElementType;
  name: string;
  hoverColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label={`${name} - part of my tech stack`}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white shadow-lg"
            role="tooltip"
            id={`tooltip-${name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
      <Icon
        className={cn(
          "h-6 w-6 transition-colors duration-200",
          isHovered ? hoverColor : "text-zinc-400"
        )}
        aria-hidden="true"
      />
    </div>
  );
}

export default function BentoGrid() {
  const { onOpen } = useContactModal();

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-16 md:py-24">
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Bento Grid - 4 columns */}
        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
          {/* Card 1: Bio (2x2 on desktop, 2 rows on mobile) */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            mobileRowSpan={2}
            className="bg-zinc-900/50"
          >
            <div className="flex h-full flex-col justify-between p-8">
              <div>
                <div className="relative mb-6 h-20 w-20 md:h-24 md:w-24">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Timothy Chinecherem"
                    fill
                    className="rounded-full border-2 border-white/10 object-cover"
                  />
                </div>
                <motion.h1
                  className="text-3xl font-bold tracking-[-0.04em] text-white md:text-5xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Timothy Chinecherem
                </motion.h1>
                <motion.p
                  className="mt-2 md:mt-3 text-base md:text-lg text-zinc-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Senior Frontend Systems Architect
                </motion.p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
                Specializing in High-Performance Next.js Systems. I architect
                lag-free Trading Engines (Solana) and Enterprise Dashboards that
                handle real-time data at scale.
              </p>
            </div>
          </BentoCard>

          {/* Card 2: Timezone (2x1) */}
          <BentoCard colSpan={2} className="bg-zinc-900/50">
            <div className="flex h-full flex-col items-center justify-center gap-1">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Local Time
              </span>
              <LiveTime />
              <span className="text-xs text-zinc-600">UTC+1</span>
            </div>
          </BentoCard>

          {/* Card 3: Connect (1x1) - Real Links */}
          <BentoCard className="bg-zinc-900/50">
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Connect
              </span>
              <div className="flex items-center gap-4" role="list" aria-label="Social media links">
                <a
                  href="https://x.com/Timothy_Neche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-white"
                  aria-label="Follow me on X (formerly Twitter)"
                  role="listitem"
                >
                  <SiX className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/ticoworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-white"
                  aria-label="View my GitHub profile"
                  role="listitem"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/timothy-chinecherem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-white"
                  aria-label="Connect with me on LinkedIn"
                  role="listitem"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Stack (1x1) - BRAND ICONS with Tooltips */}
          <BentoCard className="bg-zinc-900/50">
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500" id="stack-heading">
                Stack
              </span>
              <div className="flex items-center gap-4" role="list" aria-labelledby="stack-heading">
                <TechIcon
                  icon={SiNextdotjs}
                  name="Next.js"
                  hoverColor="text-white"
                />
                <TechIcon
                  icon={SiTypescript}
                  name="TypeScript"
                  hoverColor="text-blue-400"
                />
                <TechIcon
                  icon={SiTailwindcss}
                  name="Tailwind CSS"
                  hoverColor="text-cyan-400"
                />
                <TechIcon
                  icon={SiSupabase}
                  name="Supabase"
                  hoverColor="text-emerald-400"
                />
              </div>
            </div>
          </BentoCard>

          {/* Card 5: Tweet Embed (2x2) - RICH CONTENT */}
          <BentoCard colSpan={2} rowSpan={2} className="overflow-hidden p-0">
            <TweetCard
              id="1997365345011556612"
              className="h-full rounded-3xl border-0"
            />
          </BentoCard>

          {/* Card 6: GitHub Activity (2x2) - RICH CONTENT */}
          <BentoCard colSpan={2} rowSpan={2} className="overflow-hidden p-0">
            <GithubGraph
              username="ticoworld"
              className="h-full rounded-3xl border-0"
            />
          </BentoCard>

          {/* Card 7: Featured Project (2x2) - Links to /work */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="group relative overflow-hidden bg-zinc-900/50 cursor-pointer"
          >
            <a
              href="/work"
              className="absolute inset-0 z-20"
              aria-label="View all work"
            />
            <Image
              src="/images/project.png"
              alt="Featured Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

            {/* Arrow indicator - Top Right */}
            <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>

            {/* Project info - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-lg font-bold text-white">BankiiSwap</h3>
              <p className="mt-0.5 text-sm text-zinc-300">
                DeFi Heart of the Bankii Ecosystem
              </p>
            </div>
          </BentoCard>

          {/* Card 8: Testimonial (2x1) - Social Proof */}
          <BentoCard colSpan={2} className="bg-zinc-900/50">
            <div className="flex h-full flex-col justify-center px-6">
              <p className="text-sm italic text-zinc-300 leading-relaxed">
                &quot;Built our DeFi app in 2 weeks. Insane execution and
                attention to detail.&quot;
              </p>
              <p className="mt-3 text-xs font-medium text-zinc-500">
                — @BankiiFinance
              </p>
            </div>
          </BentoCard>

          {/* Card 9: CTA with Availability (2x1) */}
          <BentoCard colSpan={2} className="bg-zinc-900/50">
            <div className="flex h-full items-center justify-between px-6">
              {/* Left side: Availability indicator + text */}
              <div className="flex items-center gap-3">
                {/* Pulsing green dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-zinc-300">
                  Available for work
                </span>
              </div>
              {/* Right side: CTA button */}
              <button
                onClick={onOpen}
                className={cn(
                  "group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5",
                  "text-sm font-medium text-zinc-950 transition-all duration-200",
                  "hover:bg-zinc-100"
                )}
                aria-label="Open contact form to get in touch"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
