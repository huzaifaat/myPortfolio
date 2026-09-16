import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const siteUrl = "https://huzaifaathar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Huzaifa Athar | AI / Machine Learning Engineer",
    template: "%s | Huzaifa Athar",
  },
  description:
    "Huzaifa Athar, AI/ML Engineer with 5+ years of experience building production LLM applications, multi-agent systems, RAG pipelines and voice agents for enterprise clients.",
  keywords: [
    "Huzaifa Athar",
    "AI Engineer",
    "Machine Learning Engineer",
    "AI/ML Engineer",
    "LLM Engineer",
    "Multi-Agent Systems",
    "RAG",
    "Agentic AI",
    "Voice Agent Builder",
    "Document Intelligence",
    "LangChain",
    "LangGraph",
    "Python",
    "FastAPI",
    "Django Developer",
    "AWS",
    "Azure",
    "AI Chatbot",
    "Voice AI",
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
    title: "Huzaifa Athar | AI / Machine Learning Engineer",
    description:
      "5+ years building production AI systems: LLM applications, multi-agent pipelines, RAG and voice agents. Interactive portfolio with AI-powered chat.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Huzaifa Athar | AI / Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Athar | AI / Machine Learning Engineer",
    description:
      "5+ years building production AI systems: LLM applications, multi-agent pipelines, RAG and voice agents. Interactive portfolio with AI-powered chat.",
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Huzaifa Athar",
    url: siteUrl,
    jobTitle: "AI / Machine Learning Engineer",
    description:
      "AI/ML Engineer with 5+ years of experience building production LLM applications, multi-agent systems, RAG pipelines and voice agents for enterprise clients.",
    worksFor: {
      "@type": "Organization",
      name: "Salestech Data & AI",
    },
    knowsAbout: [
      "Large Language Models", "LangChain", "LangGraph", "CrewAI",
      "Retrieval Augmented Generation", "Multi-Agent Systems", "Document Intelligence",
      "Natural Language Processing", "Voice Agents", "AWS Bedrock",
      "Python", "FastAPI", "Django", "PostgreSQL", "pgvector",
      "Docker", "AWS", "Azure", "GCP", "MLOps",
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
    image: `${siteUrl}/profile.PNG`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Huzaifa Athar",
    url: siteUrl,
    description:
      "Portfolio of Huzaifa Athar, AI / Machine Learning Engineer.",
    author: {
      "@type": "Person",
      name: "Huzaifa Athar",
    },
  },
];

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
      <body className={`${inter.variable} ${jetbrains.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
