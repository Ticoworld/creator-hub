"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  mobileRowSpan?: 1 | 2 | 3; // New: allow different row span on mobile
}

export default function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  mobileRowSpan,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 || 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttled mouse move handler using requestAnimationFrame (60fps)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current!.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  }, [isMobile]);

  // Cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const colSpanClass = colSpan === 2 ? "md:col-span-2" : "col-span-1";

  // Row span classes - must be explicit for Tailwind JIT to recognize
  const mobileRowSpanMap: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  };
  const desktopRowSpanMap: Record<number, string> = {
    1: "md:row-span-1",
    2: "md:row-span-2",
  };

  let rowSpanClass = "";
  if (mobileRowSpan) {
    // Use mobileRowSpan for mobile, rowSpan for desktop
    rowSpanClass = `${mobileRowSpanMap[mobileRowSpan]} ${desktopRowSpanMap[rowSpan]}`;
  } else {
    // Default behavior: rowSpan applies to desktop only
    rowSpanClass = rowSpan === 2 ? "md:row-span-2" : "row-span-1";
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-zinc-900",
        "border border-white/10",
        "transition-all duration-300 ease-out",
        colSpanClass,
        rowSpanClass,
        className
      )}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
      onMouseLeave={isMobile ? undefined : () => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Spotlight effect on hover - desktop only */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      )}

      {/* Glowing border effect - desktop only */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 40%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
