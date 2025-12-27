"use client";

import { STACK } from "@/data/stack";
import StackCard from "@/components/StackCard";

export default function StackPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-24 pb-32 px-4">
      {/* Grid - 4 columns on desktop */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {STACK.map((item) => (
          <StackCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
