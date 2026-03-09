"use client";

import { useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  target,
  rel,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const shared = {
    className: `magnetic-btn ${className}`,
    style: { transform: `translate(${pos.x}px, ${pos.y}px)` },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (as === "a") {
    return (
      <div ref={ref} className="inline-block">
        <a href={href} target={target} rel={rel} {...shared}>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} className="inline-block">
      <button onClick={onClick} {...shared}>
        {children}
      </button>
    </div>
  );
}
