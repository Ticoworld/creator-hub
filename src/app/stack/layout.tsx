import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Engine | Creator Hub",
  description: "AI-Augmented Workflow. The tools and systems powering my work.",
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
