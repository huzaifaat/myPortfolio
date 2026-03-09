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

export const metadata: Metadata = {
  title: "Huzaifa Athar | Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years of experience. Interactive portfolio with AI-powered chat.",
  openGraph: {
    title: "Huzaifa Athar | Full Stack Developer",
    description: "Interactive portfolio with AI chat. 5+ years building production apps with Django, React & Next.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
