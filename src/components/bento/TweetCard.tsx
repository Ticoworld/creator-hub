"use client";

import { Tweet } from "react-tweet";
import { cn } from "@/lib/utils";

interface TweetCardProps {
  id: string;
  className?: string;
}

export default function TweetCard({ id, className }: TweetCardProps) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-3xl",
        "bg-[#000000] border border-white/5", // Pure black background
        className
      )}
    >
      {/* Aggressive CSS overrides to strip react-tweet's styling */}
      <style jsx global>{`
        /* Force remove ALL borders and backgrounds from react-tweet */
        .react-tweet-theme,
        .react-tweet-theme * {
          border: none !important;
          background: transparent !important;
        }

        /* Reset all container margins and paddings */
        .react-tweet-theme {
          margin: 0 !important;
        }

        /* Strip article (main tweet container) styling completely */
        .react-tweet-theme article {
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }

        /* Remove any wrapper div styling */
        .react-tweet-theme > div,
        .react-tweet-theme article > div {
          border: none !important;
          background: transparent !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        /* Color overrides for dark theme */
        .react-tweet-theme {
          --tweet-bg-color: transparent !important;
          --tweet-border-color: transparent !important;
          --tweet-color-text-primary: #ffffff !important;
          --tweet-color-text-secondary: #a1a1aa !important;
          --tweet-skeleton-gradient: linear-gradient(
            270deg,
            #18181b,
            #27272a,
            #18181b
          ) !important;
        }

        /* Custom scrollbar */
        .tweet-scroll-container::-webkit-scrollbar {
          width: 4px;
        }
        .tweet-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .tweet-scroll-container::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }
      `}</style>

      {/* 
        Scrollable container with controlled padding.
        p-6 provides spacing from our outer border.
        pb-12 ensures bottom content isn't cut off.
      */}
      <div
        className="tweet-scroll-container h-full w-full overflow-y-auto p-6 pb-12"
        data-theme="dark"
      >
        <div className="dark w-full">
          <Tweet id={id} />
        </div>
      </div>
    </div>
  );
}
