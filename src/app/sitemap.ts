import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = blogPosts.map((post) => ({
    url: `https://huzaifaathar.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://huzaifaathar.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://huzaifaathar.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogs,
  ];
}
