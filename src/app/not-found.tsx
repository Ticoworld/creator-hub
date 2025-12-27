import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050505] px-6">
      {/* 404 Text - Very subtle */}
      <h1 className="text-[12rem] font-bold leading-none text-zinc-800 md:text-[16rem]">
        404
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-xl font-medium text-white md:text-2xl">
        Signal Lost.
      </p>

      {/* Return button */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-zinc-800"
      >
        Return to Base
      </Link>
    </main>
  );
}
