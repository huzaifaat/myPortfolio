"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

/* ── tech icons ── */
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

/*
  Each icon lives on a 3D sphere. We define 3 orbit rings:
  - Horizontal (equator): rotates around Y axis
  - Vertical (meridian): rotates around X axis
  - Diagonal (tilted 45°): rotates around a tilted axis

  Each ring has its own set of icons spread evenly.
  We project 3D → 2D with perspective for depth.
*/

interface OrbitConfig {
  items: typeof techItems;
  radius: number;
  speed: number;        // radians per second
  /** Tilt of the orbit plane: [tiltX, tiltZ] in radians */
  tilt: [number, number];
}

function project3D(
  x3: number, y3: number, z3: number,
  cx: number, cy: number, perspective: number
) {
  const scale = perspective / (perspective + z3);
  return {
    x: cx + x3 * scale,
    y: cy + y3 * scale,
    z: z3,
    scale,
  };
}

function rotateY(x: number, y: number, z: number, a: number) {
  return {
    x: x * Math.cos(a) + z * Math.sin(a),
    y,
    z: -x * Math.sin(a) + z * Math.cos(a),
  };
}

function rotateX(x: number, y: number, z: number, a: number) {
  return {
    x,
    y: y * Math.cos(a) - z * Math.sin(a),
    z: y * Math.sin(a) + z * Math.cos(a),
  };
}

function rotateZ(x: number, y: number, z: number, a: number) {
  return {
    x: x * Math.cos(a) - y * Math.sin(a),
    y: x * Math.sin(a) + y * Math.cos(a),
    z,
  };
}

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
      const r = size * 0.44;

      // Outer circle
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      // Latitude lines
      for (let i = 1; i < 7; i++) {
        const ratio = i / 7;
        const y = cy - r + ratio * 2 * r;
        const latR = Math.sqrt(r * r - (y - cy) * (y - cy));
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.04 + ratio * 0.03})`;
        ctx.beginPath();
        ctx.ellipse(cx, y, latR, latR * 0.08, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines (rotating)
      const rot = rotationRef.current;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + rot;
        const rx = Math.abs(Math.cos(angle)) * r;
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.05 + Math.abs(Math.cos(angle)) * 0.06})`;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, r, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      rotationRef.current += 0.002;
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

/* ── All icons rendered with 3D sphere projection ── */
function GlobeIcons({ orbits, containerSize, perspective }: {
  orbits: OrbitConfig[];
  containerSize: number;
  perspective: number;
}) {
  const angleRef = useRef(0);
  const [positions, setPositions] = useState<
    { tech: typeof techItems[0]; x: number; y: number; z: number; scale: number }[]
  >([]);

  const compute = useCallback(() => {
    const cx = containerSize / 2;
    const cy = containerSize / 2;
    const result: typeof positions = [];

    for (const orbit of orbits) {
      for (let i = 0; i < orbit.items.length; i++) {
        const baseAngle = (i / orbit.items.length) * Math.PI * 2;
        const a = baseAngle + angleRef.current * orbit.speed;

        // Start on XZ plane (horizontal circle)
        let px = orbit.radius * Math.cos(a);
        let py = 0;
        let pz = orbit.radius * Math.sin(a);

        // Apply orbit tilt
        const r1 = rotateX(px, py, pz, orbit.tilt[0]);
        const r2 = rotateZ(r1.x, r1.y, r1.z, orbit.tilt[1]);

        const proj = project3D(r2.x, r2.y, r2.z, cx, cy, perspective);

        result.push({
          tech: orbit.items[i],
          x: proj.x,
          y: proj.y,
          z: proj.z,
          scale: proj.scale,
        });
      }
    }

    setPositions(result);
  }, [orbits, containerSize, perspective]);

  useEffect(() => {
    let raf: number;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      angleRef.current += dt;
      compute();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [compute]);

  // Sort by z so front items render on top
  const sorted = [...positions].sort((a, b) => a.z - b.z);

  return (
    <>
      {sorted.map(({ tech, x, y, z, scale }) => {
        // Normalize z for opacity: back of sphere = dim, front = bright
        const maxR = 250;
        const normalZ = (z + maxR) / (2 * maxR); // 0 = back, 1 = front
        const opacity = 0.3 + normalZ * 0.7;
        const iconScale = 0.6 + normalZ * 0.5;

        return (
          <div
            key={tech.name}
            className="absolute flex flex-col items-center gap-1.5 pointer-events-none"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${iconScale * scale})`,
              opacity,
              zIndex: Math.round(normalZ * 20),
            }}
          >
            <div
              className="w-11 h-11 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-black shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${tech.color}40, ${tech.color}18)`,
                color: tech.color,
                boxShadow: `0 0 25px ${tech.color}35, 0 0 50px ${tech.color}12`,
                textShadow: `0 0 12px ${tech.color}90`,
              }}
            >
              {tech.icon}
            </div>
            <span
              className="text-[8px] sm:text-[10px] md:text-xs font-mono font-semibold whitespace-nowrap"
              style={{
                color: tech.color,
                textShadow: `0 0 8px ${tech.color}50`,
                opacity: Math.max(0.6, opacity),
              }}
            >
              {tech.name}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default function SkillsSection() {
  const [responsiveSize, setResponsiveSize] = useState(560);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) setResponsiveSize(300);
      else if (window.innerWidth < 640) setResponsiveSize(340);
      else if (window.innerWidth < 1024) setResponsiveSize(460);
      else setResponsiveSize(560);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const globeRadius = responsiveSize * 0.38;
  const perspective = responsiveSize * 1.8;

  // 3 orbits with different tilts so icons spread across the sphere
  const orbits: OrbitConfig[] = [
    {
      // Horizontal equator — rotates left
      items: techItems.slice(0, 6),
      radius: globeRadius,
      speed: 0.3,
      tilt: [0, 0],
    },
    {
      // Vertical meridian — rotates up
      items: techItems.slice(6, 11),
      radius: globeRadius * 0.95,
      speed: -0.25,
      tilt: [Math.PI / 2, 0],
    },
    {
      // Diagonal 45° — rotates tilted
      items: techItems.slice(11),
      radius: globeRadius * 0.9,
      speed: 0.2,
      tilt: [Math.PI / 4, Math.PI / 6],
    },
  ];

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

        {/* Globe with 3D orbiting icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
          className="flex justify-center"
        >
          <div
            className="relative"
            style={{ width: responsiveSize, height: responsiveSize }}
          >
            {/* Center glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl"
              style={{ width: responsiveSize * 0.7, height: responsiveSize * 0.7 }}
            />

            {/* Wireframe globe */}
            <WireGlobe size={responsiveSize} />

            {/* 3D orbiting icons */}
            <GlobeIcons
              orbits={orbits}
              containerSize={responsiveSize}
              perspective={perspective}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
