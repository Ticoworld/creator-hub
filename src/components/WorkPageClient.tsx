"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { ArrowRight } from "lucide-react";

export default function WorkPageClient() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Helper to find project by ID
  const getProject = (id: string) => PROJECTS.find((p) => p.id === id);

  return (
    <>
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* 4-Column Bento Grid - Exact Manual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px] md:auto-rows-[400px]">
          {/* ROW 1 */}

          {/* 1. BankiiSwap (Desktop 2-col) */}
          {getProject("bankiiswap") && (
            <ProjectCard
              project={getProject("bankiiswap")!}
              index={0}
              className="col-span-1 md:col-span-2 row-span-1"
              onClick={() => setSelectedId("bankiiswap")}
            />
          )}

          {/* 2. Gramacot (Mobile 1-col) */}
          {getProject("gramacot") && (
            <ProjectCard
              project={getProject("gramacot")!}
              index={1}
              className="col-span-1 row-span-1"
              onClick={() => setSelectedId("gramacot")}
            />
          )}

          {/* 3. Ethovia (Mobile 1-col) */}
          {getProject("ethovia") && (
            <ProjectCard
              project={getProject("ethovia")!}
              index={2}
              className="col-span-1 row-span-1"
              onClick={() => setSelectedId("ethovia")}
            />
          )}

          {/* ROW 2 */}

          {/* 4. New Era (Mobile 1-col) */}
          {getProject("new-era") && (
            <ProjectCard
              project={getProject("new-era")!}
              index={3}
              className="col-span-1 row-span-1"
              onClick={() => setSelectedId("new-era")}
            />
          )}

          {/* 5. CTA Card (1-col) */}
          <div className="col-span-1 row-span-1 relative group cursor-pointer order-last md:order-none">
            <div className="absolute inset-0 rounded-3xl bg-zinc-900/40 border border-white/5 flex flex-col items-center justify-center p-8 transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:border-white/10">
              <div className="mb-4 text-zinc-600 group-hover:text-white transition-colors duration-300">
                <ArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <h3 className="text-white text-xl font-medium text-center mb-2">
                Your Project?
              </h3>
            </div>
          </div>

          {/* 6. Sophex (Desktop 2-col) */}
          {getProject("sophex") && (
            <ProjectCard
              project={getProject("sophex")!}
              index={4}
              className="col-span-1 md:col-span-2 row-span-1"
              onClick={() => setSelectedId("sophex")}
            />
          )}

          {/* ROW 3 */}

          {/* 7. GlobNFTs (Desktop 2-col) */}
          {getProject("globnfts") && (
            <ProjectCard
              project={getProject("globnfts")!}
              index={5}
              className="col-span-1 md:col-span-2 row-span-1"
              onClick={() => setSelectedId("globnfts")}
            />
          )}

          {/* 8. Saver AI (Desktop 2-col) */}
          {getProject("saver-ai") && (
            <ProjectCard
              project={getProject("saver-ai")!}
              index={6}
              className="col-span-1 md:col-span-2 row-span-1"
              onClick={() => setSelectedId("saver-ai")}
            />
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-20 flex justify-between items-center border-t border-white/5 pt-10">
          <div className="text-zinc-500 text-sm">© 2024 Tico</div>
          <a
            href="#"
            className="text-sm text-white hover:text-zinc-300 transition-colors"
          >
            All Projects
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal selectedId={selectedId} setSelectedId={setSelectedId} />
    </>
  );
}
