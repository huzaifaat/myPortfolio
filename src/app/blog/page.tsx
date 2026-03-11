import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on full-stack development, AI engineering, technical leadership, and building production-grade products — by Huzaifa Athar.",
};

export default function BlogPage() {
  return (
    <div className="noise">
      <div className="spotlight" />
      <div className="dot-grid" />
      <Navbar />

      <div className="min-h-screen max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-fg-secondary hover:text-accent text-sm mb-12 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>

        <div className="mb-16">
          <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">Blog</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Thoughts & <span className="gradient-text">Insights</span>
          </h1>
          <p className="mt-4 text-fg-secondary max-w-lg">
            On engineering, AI, leadership, and building products that matter.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="bento-card glow-border bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-card-hover transition-all">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-fg-secondary text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-fg-secondary">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
