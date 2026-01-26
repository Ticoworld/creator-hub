"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { SiX, SiGithub, SiLinkedin } from "react-icons/si";
import { useContactModal } from "@/hooks/use-contact-modal";
import { cn } from "@/lib/utils";

const EMAIL = "orichitimothychinecherem@gmail.com";

export default function ContactModal() {
  const { isOpen, onClose } = useContactModal();
  const [hasCopied, setHasCopied] = useState(false);
  const [lagosTime, setLagosTime] = useState<string | null>(null);

  // Hydration-safe clock - only runs on client
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
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Copy to clipboard logic
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, []);

  // Close on ESC key and lock body scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.classList.add('modal-open');
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative w-full max-w-md",
              "bg-zinc-900 border border-white/10 rounded-3xl",
              "p-8 shadow-2xl"
            )}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Let&apos;s build something.
            </h2>

            {/* Email Copy Button */}
            <button
              onClick={handleCopy}
              className={cn(
                "mt-6 h-16 w-full bg-white rounded-xl",
                "flex items-center justify-center gap-3",
                "text-black font-medium text-lg",
                "hover:scale-[1.02] active:scale-95 transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-900"
              )}
            >
              {hasCopied ? (
                <>
                  <Check className="h-5 w-5 text-emerald-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5" />
                  Copy Email
                </>
              )}
            </button>

            {/* Secondary: Open in mail app (escape hatch) */}
            <a
              href={`mailto:${EMAIL}?subject=Portfolio%20Inquiry`}
              className="mt-3 inline-flex items-center justify-center gap-1 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              or open in mail app
              <span className="text-xs">↗</span>
            </a>

            {/* Social Icons */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <SiX className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <SiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Footer - Live Status */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
                {/* Pulsing Green Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>{lagosTime ?? "..."} • Open to work</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
