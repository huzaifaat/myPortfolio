import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Huzaifa Athar | AI / Machine Learning Engineer",
    short_name: "Huzaifa Athar",
    description:
      "AI/ML Engineer with 5+ years of experience building production LLM applications, multi-agent systems, RAG pipelines and voice agents for enterprise clients.",
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
