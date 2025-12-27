"use client";

import { useState, useEffect, memo } from "react";

/**
 * Isolated LiveTime component - only this tiny component re-renders every second,
 * not the parent grid. This fixes the performance lag caused by the clock.
 */
function LiveTimeComponent() {
  const [lagosTime, setLagosTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
      setLagosTime(time);
    };

    updateTime();
    // Update every minute instead of every second for even better performance
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-sm font-medium text-zinc-400 tabular-nums">
      {lagosTime ?? "..."}
    </span>
  );
}

// Memoize to prevent unnecessary re-renders from parent
export const LiveTime = memo(LiveTimeComponent);
