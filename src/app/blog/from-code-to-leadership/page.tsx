import { Metadata } from "next";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const post = getBlogPost("from-code-to-leadership");

export const metadata: Metadata = post
  ? {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: ["Huzaifa Athar"],
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
      },
    }
  : {};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function renderMarkdown(content: string) {
  // Simple markdown to HTML conversion for blog content
  return content
    .split("\n\n")
    .map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Headings
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-12 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // Bold-only lines (like numbered lessons)
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return (
          <p key={i} className="text-lg font-semibold mt-8 mb-2 text-fg">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      }

      // List items
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-2 text-fg-secondary leading-relaxed my-4">
            {items.map((li, j) => (
              <li key={j} dangerouslySetInnerHTML={{
                __html: li
                  .replace("- ", "")
                  .replace(/\*\*(.*?)\*\*/g, "<strong class='text-fg'>$1</strong>")
                  .replace(/\*(.*?)\*/g, "<em>$1</em>"),
              }} />
            ))}
          </ul>
        );
      }

      // Paragraphs
      return (
        <p
          key={i}
          className="text-fg-secondary leading-relaxed my-4"
          dangerouslySetInnerHTML={{
            __html: trimmed
              .replace(/\*\*(.*?)\*\*/g, "<strong class='text-fg'>$1</strong>")
              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
          }}
        />
      );
    })
    .filter(Boolean);
}

export default function BlogPostPage() {
  if (!post) notFound();

  return (
    <div className="noise">
      <div className="spotlight" />
      <div className="dot-grid" />
      <Navbar />

      <article className="min-h-screen max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-fg-secondary hover:text-accent text-sm mb-12 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          All Posts
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-4 text-sm text-fg-secondary mb-12">
          <span>Huzaifa Athar</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{post.readTime}</span>
        </div>

        <div className="w-full h-px bg-border mb-8" />

        {/* Content */}
        <div className="prose-custom">
          {renderMarkdown(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-card border border-border rounded-2xl text-center">
          <p className="text-lg font-bold mb-2">Want to work together?</p>
          <p className="text-fg-secondary text-sm mb-5">
            I&apos;m always open to new projects and opportunities.
          </p>
          <a
            href="mailto:huzaifaathar1@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}
