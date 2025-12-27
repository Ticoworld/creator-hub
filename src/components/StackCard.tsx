"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { StackItem } from "@/data/stack";

interface StackCardProps {
  item: StackItem;
}

export default function StackCard({ item }: StackCardProps) {
  const isLaptop = item.isLaptop;
  const hasImage = !!item.image;
  const hasImages = item.images && item.images.length > 0;
  const hasSingleIcon = !!item.icon;
  const hasMultipleIcons = item.icons && item.icons.length > 0;

  // Determine aspect ratio
  const getAspectClass = () => {
    if (isLaptop) return "aspect-[4/1.5]";
    if (hasImages || hasMultipleIcons) return "aspect-[2/1]";
    return "aspect-square";
  };

  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-3xl",
        "bg-zinc-900/30 border border-white/5",
        "transition-all duration-300 hover:bg-zinc-900/50",
        item.span,
        getAspectClass()
      )}
    >
      {/* Single Image (Laptop) */}
      {hasImage && (
        <div className={cn("relative w-full h-full", isLaptop ? "p-0" : "p-8")}>
          <Image
            src={item.image!}
            alt={item.name}
            fill
            className={cn(
              "transition-all duration-500",
              isLaptop
                ? "object-cover group-hover:opacity-90"
                : "object-contain group-hover:scale-110"
            )}
          />
        </div>
      )}

      {/* Single Icon (Frameworks) - MONOCHROME */}
      {hasSingleIcon &&
        (() => {
          const Icon = item.icon!;
          return (
            <div className="flex items-center justify-center h-full">
              <Icon
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20",
                  "text-zinc-500 group-hover:text-white",
                  "transition-colors duration-300"
                )}
              />
            </div>
          );
        })()}

      {/* Multiple Images (AI Tools) */}
      {hasImages && (
        <div className="flex items-center justify-center h-full gap-10 px-8">
          {item.images!.map((src, index) => (
            <div key={index} className="relative w-14 h-14 md:w-16 md:h-16">
              <Image
                src={src}
                alt=""
                fill
                className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* Multiple Icons (Shipping) - MONOCHROME */}
      {hasMultipleIcons && (
        <div className="flex items-center justify-center h-full gap-14">
          {item.icons!.map((Icon, index) => (
            <Icon
              key={index}
              className="w-10 h-10 md:w-12 md:h-12 text-zinc-500 group-hover:text-white transition-colors duration-300"
            />
          ))}
        </div>
      )}

      {/* Tooltip label */}
      <span
        className={cn(
          "absolute bottom-4 left-4",
          "text-sm font-medium text-white/60",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300"
        )}
      >
        {item.name}
      </span>
    </div>
  );
}
