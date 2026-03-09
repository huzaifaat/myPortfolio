"use client";

interface Props {
  items: string[];
  reverse?: boolean;
}

export default function Marquee({ items, reverse = false }: Props) {
  const content = [...items, ...items];

  return (
    <div className="overflow-hidden py-4 relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg to-transparent z-10" />
      <div
        className="flex gap-4 whitespace-nowrap animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-fg-secondary shrink-0 hover:border-accent hover:text-accent transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
