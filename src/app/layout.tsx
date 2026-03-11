import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://huzaifaathar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Huzaifa Athar | Full Stack Developer & AI Engineer",
    template: "%s | Huzaifa Athar",
  },
  description:
    "Full Stack Developer & AI Engineer with 5+ years of experience building production-grade web apps, AI chatbots, and voice agents. Django, React, Next.js, AWS, GCP.",
  keywords: [
    "Huzaifa Athar",
    "Full Stack Developer",
    "AI Engineer",
    "Voice Agent Builder",
    "Django Developer",
    "React Developer",
    "Next.js",
    "Python",
    "AWS",
    "GCP",
    "AI Chatbot",
    "Voice AI",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Huzaifa Athar", url: siteUrl }],
  creator: "Huzaifa Athar",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Huzaifa Athar",
    title: "Huzaifa Athar | Full Stack Developer & AI Engineer",
    description:
      "5+ years building production apps, AI chatbots & voice agents. Interactive portfolio with AI-powered chat.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Huzaifa Athar — Full Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Athar | Full Stack Developer & AI Engineer",
    description:
      "5+ years building production apps, AI chatbots & voice agents. Interactive portfolio with AI-powered chat.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Huzaifa Athar",
  url: siteUrl,
  jobTitle: "Full Stack Developer & AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "DigitLabs",
  },
  knowsAbout: [
    "Python", "Django", "FastAPI", "React", "Next.js", "TypeScript",
    "AWS", "GCP", "Docker", "PostgreSQL", "MongoDB", "Redis",
    "AI Chatbots", "Voice Agents", "Machine Learning",
  ],
  sameAs: [
    "https://linkedin.com/in/huzaifa-athar-b048a2120",
    "https://github.com/huzaifaat",
  ],
  email: "huzaifaathar1@gmail.com",
  telephone: "+923234125331",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Central Punjab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
