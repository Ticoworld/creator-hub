import WorkPageClient from "@/components/WorkPageClient";

export const metadata = {
  title: "Work | Timothy Chinecherem",
  description: "Selected projects and work by Timothy Chinecherem.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 pt-24 md:pt-32 pb-32">
      <WorkPageClient />
    </main>
  );
}
