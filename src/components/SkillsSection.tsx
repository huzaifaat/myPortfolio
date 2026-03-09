"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── tech icons placed on the globe ── */
const techItems = [
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "Django", icon: "🎸", color: "#092E20" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "Redis", icon: "◆", color: "#DC382D" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "FastAPI", icon: "⚡", color: "#009688" },
  { name: "Celery", icon: "🌿", color: "#37B24D" },
  { name: "Git", icon: "⑂", color: "#F05032" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "MySQL", icon: "🗄️", color: "#4479A1" },
  { name: "Azure", icon: "☁️", color: "#0078D4" },
];

/* ── Wireframe globe drawn on canvas ── */
function WireGlobe({ size }: { size: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      const r = size * 0.42;

      // Outer circle
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      // Latitude lines
      const latCount = 6;
      for (let i = 1; i < latCount; i++) {
        const ratio = i / latCount;
        const y = cy - r + ratio * 2 * r;
        const latR = Math.sqrt(r * r - (y - cy) * (y - cy));
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 + ratio * 0.04})`;
        ctx.beginPath();
        ctx.ellipse(cx, y, latR, latR * 0.1, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines (rotating)
      const lonCount = 8;
      const rot = rotationRef.current;
      for (let i = 0; i < lonCount; i++) {
        const angle = (i / lonCount) * Math.PI + rot;
        const rx = Math.abs(Math.cos(angle)) * r;
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 + Math.abs(Math.cos(angle)) * 0.07})`;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, r, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Dotted grid overlay
      ctx.fillStyle = "rgba(139, 92, 246, 0.04)";
      const dotSpacing = 20;
      for (let x = cx - r; x <= cx + r; x += dotSpacing) {
        for (let y = cy - r; y <= cy + r; y += dotSpacing) {
          const dx = x - cx;
          const dy = y - cy;
          if (dx * dx + dy * dy < r * r) {
            ctx.beginPath();
            ctx.arc(x, y, 0.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rotationRef.current += 0.003;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
}

/* ── Orbiting icons ── */
function OrbitingIcons({ radius, items, duration, reverse, globeSize }: {
  radius: number;
  items: typeof techItems;
  duration: number;
  reverse?: boolean;
  globeSize: number;
}) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let raf: number;
    let last = performance.now();
    const speed = ((Math.PI * 2) / duration) * (reverse ? -1 : 1);

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setAngle((prev) => prev + speed * dt);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, reverse]);

  const cx = globeSize / 2;
  const cy = globeSize / 2;

  return (
    <>
      {/* Orbit ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {items.map((tech, i) => {
        const itemAngle = angle + (i / items.length) * Math.PI * 2;
        const x = cx + Math.cos(itemAngle) * radius;
        const y = cy + Math.sin(itemAngle) * radius;
        // Calculate depth for 3D effect (items in "back" are smaller/dimmer)
        const depth = Math.sin(itemAngle);
        const scale = 0.8 + depth * 0.2;
        const opacity = 0.6 + depth * 0.4;

        return (
          <div
            key={tech.name}
            className="absolute flex flex-col items-center gap-1.5 pointer-events-none"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex: Math.round(depth * 10) + 10,
              transition: "opacity 0.3s",
            }}
          >
            <div
              className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-2xl border-0"
              style={{
                background: `linear-gradient(135deg, ${tech.color}35, ${tech.color}15)`,
                color: tech.color,
                boxShadow: `0 0 30px ${tech.color}30, 0 0 60px ${tech.color}10`,
                textShadow: `0 0 10px ${tech.color}80`,
              }}
            >
              {tech.icon}
            </div>
            <span className="text-[10px] md:text-xs font-mono font-semibold text-fg-secondary whitespace-nowrap drop-shadow-sm">
              {tech.name}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default function SkillsSection() {
  const globeSize = 500;
  const containerRef = useRef<HTMLDivElement>(null);
  const [responsiveSize, setResponsiveSize] = useState(globeSize);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setResponsiveSize(320);
      else if (window.innerWidth < 1024) setResponsiveSize(420);
      else setResponsiveSize(500);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Split icons into two orbits
  const innerOrbit = techItems.slice(0, 8);
  const outerOrbit = techItems.slice(8);

  const innerRadius = responsiveSize * 0.38;
  const outerRadius = responsiveSize * 0.58;

  return (
    <section id="skills" className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">Tech Stack</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Globe with orbiting icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
          className="flex justify-center"
        >
          <div
            ref={containerRef}
            className="relative"
            style={{
              width: responsiveSize + outerRadius * 0.6,
              height: responsiveSize + outerRadius * 0.6,
            }}
          >
            {/* Center glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
              style={{ width: responsiveSize * 0.8, height: responsiveSize * 0.8 }}
            />

            {/* Wireframe globe */}
            <WireGlobe size={responsiveSize} />

            {/* Inner orbit — 8 icons, 40s rotation */}
            <OrbitingIcons
              radius={innerRadius}
              items={innerOrbit}
              duration={40}
              globeSize={responsiveSize + outerRadius * 0.6}
            />

            {/* Outer orbit — 8 icons, 55s rotation, reverse */}
            <OrbitingIcons
              radius={outerRadius}
              items={outerOrbit}
              duration={55}
              reverse
              globeSize={responsiveSize + outerRadius * 0.6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
