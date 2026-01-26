import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactModal from "@/components/ContactModal";
import FloatingDock from "@/components/FloatingDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.timothychinecherem.com"),
  title: "Timothy Chinecherem | Digital Architect",
  description:
    "Architecting high-performance frontend systems with 99.9% uptime. Specializing in real-time data architectures, sub-100ms latency optimization, and enterprise-scale Next.js applications.",
  openGraph: {
    title: "Timothy Chinecherem | Digital Architect",
    description:
      "Architecting high-performance frontend systems with 99.9% uptime. Specializing in real-time data architectures and enterprise-scale Next.js applications.",
    url: "https://www.timothychinecherem.com",
    siteName: "Timothy Chinecherem",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Timothy Chinecherem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy Chinecherem",
    description:
      "Architecting high-performance frontend systems with 99.9% uptime. Specializing in real-time data architectures and enterprise-scale Next.js applications.",
    images: ["/images/avatar.jpg"],
  },
};

// JSON-LD Structured Data for enhanced SEO
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Timothy Chinecherem",
  url: "https://www.timothychinecherem.com",
  image: "https://www.timothychinecherem.com/images/avatar.jpg",
  jobTitle: "Senior Frontend Systems Architect",
  description:
    "Architecting high-performance frontend systems with 99.9% uptime. Specializing in real-time data architectures, sub-100ms latency optimization, and enterprise-scale Next.js applications.",
  sameAs: [
    "https://x.com/Timothy_Neche",
    "https://github.com/ticoworld",
    "https://www.linkedin.com/in/timothy-chinecherem",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Supabase",
    "Frontend Systems Architecture",
    "Real-Time Systems",
    "Performance Optimization",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Timothy Chinecherem | Digital Architect",
  url: "https://www.timothychinecherem.com",
  description:
    "Portfolio of Timothy Chinecherem - Senior Frontend Systems Architect specializing in high-performance Next.js, real-time Solana trading engines, and enterprise dashboards.",
  author: {
    "@type": "Person",
    name: "Timothy Chinecherem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] font-sans antialiased`}
      >
        <ContactModal />
        {children}
        <FloatingDock />
      </body>
    </html>
  );
}
