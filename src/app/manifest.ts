import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Huzaifa Athar | Full Stack Developer & AI Engineer",
    short_name: "Huzaifa Athar",
    description:
      "Full Stack Developer & AI Engineer with 5+ years of experience building production-grade web apps, AI chatbots, and voice agents.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#8b5cf6",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
