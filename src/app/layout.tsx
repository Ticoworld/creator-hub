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
    "Building products that blend beautiful design with solid engineering. Full-stack developer focused on premium experiences.",
  openGraph: {
    title: "Timothy Chinecherem | Digital Architect",
    description:
      "Building products that blend beautiful design with solid engineering.",
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
      "Building products that blend beautiful design with solid engineering.",
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
  jobTitle: "Full-Stack Developer",
  description:
    "Building products that blend beautiful design with solid engineering. Full-stack developer focused on premium experiences.",
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
    "Full-Stack Development",
    "UI/UX Design",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Timothy Chinecherem | Digital Architect",
  url: "https://www.timothychinecherem.com",
  description:
    "Portfolio of Timothy Chinecherem - Full-stack developer building premium digital experiences.",
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
