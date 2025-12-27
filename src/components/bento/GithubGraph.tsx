"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, ComponentType } from "react";
import type { Props as GitHubCalendarProps } from "react-github-calendar";

interface GithubGraphProps {
  username: string;
  className?: string;
}

// Custom color theme matching the Void/Zinc aesthetic with green accents
const customTheme = {
  dark: ["#18181b", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export default function GithubGraph({ username, className }: GithubGraphProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Calendar, setCalendar] =
    useState<ComponentType<GitHubCalendarProps> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically import on client only to avoid SSR issues
    import("react-github-calendar")
      .then((mod) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const moduleData = mod as any;

        // Robustly find the component: check default, then named export, then the module itself
        // A React component is a function or class
        let Component =
          moduleData.default || moduleData.GitHubCalendar || moduleData;

        // If it's still an object (module namespace) but not a valid element, try first key
        if (
          typeof Component === "object" &&
          Component !== null &&
          !Component.$$typeof
        ) {
          const keys = Object.keys(Component);
          if (keys.length > 0) {
            // Try to find a function being exported (typical for component libraries)
            const componentKey = keys.find(
              (key) => typeof Component[key] === "function"
            );
            if (componentKey) {
              Component = Component[componentKey];
            }
          }
        }

        setCalendar(() => Component);
      })
      .catch((err) => {
        console.error("Failed to load GitHub Calendar:", err);
        setError("Failed to load");
      });
  }, []);

  return (
    <div
      className={cn(
        "p-6 overflow-hidden rounded-3xl h-full flex flex-col",
        "bg-[#0a0a0a] border border-white/5",
        className
      )}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-white/10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white leading-none mb-1">
              GitHub
            </h3>
            <p className="text-[10px] text-zinc-500 font-medium leading-none">
              @{username}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 hover:text-white transition-colors"
          >
            Profile ↗
          </a>
        </div>
      </div>

      {/* Contribution Graph Container */}
      <div className="flex-1 flex flex-col justify-end min-h-[100px]">
        {error ? (
          <div className="flex items-center justify-center h-full text-xs text-red-400">
            {error}
          </div>
        ) : Calendar ? (
          <div className="w-full relative">
            <Calendar
              username={username}
              colorScheme="dark"
              theme={customTheme}
              fontSize={10}
              blockSize={10}
              blockMargin={4}
              showColorLegend={false}
              showMonthLabels={true}
              labels={{
                totalCount: "{{count}} contributions",
              }}
              style={{
                width: "100%",
                maxWidth: "100%",
              }}
            />
          </div>
        ) : (
          <div className="h-full w-full animate-pulse rounded-xl bg-white/5" />
        )}
      </div>
    </div>
  );
}
