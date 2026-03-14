"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import type { IconType } from "react-icons";
import {
  SiPython, SiDjango, SiReact, SiNextdotjs, SiTypescript,
  SiPostgresql, SiMongodb, SiRedis, SiGooglecloud, SiDocker,
  SiFastapi, SiCelery, SiGit, SiJavascript, SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { FaAws, FaRobot } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

/* ── tech icons ── */
const techItems: { name: string; icon: IconType; color: string }[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Bedrock", icon: FaRobot, color: "#FF9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Celery", icon: SiCelery, color: "#37B24D" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Azure", icon: VscAzure, color: "#0078D4" },
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

/* ── Wireframe globe with triangulated mesh ── */
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

    // Build sphere vertices: rows of latitude, columns of longitude
    const latSegments = 24;
    const lonSegments = 32;
    const r = size * 0.44;
    const cx = size / 2;
    const cy = size / 2;
    const perspective = size * 1.8;

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const rot = rotationRef.current;

      // Generate 3D points on sphere and project to 2D
      const points: { x: number; y: number; z: number; sx: number; sy: number }[][] = [];

      for (let lat = 0; lat <= latSegments; lat++) {
        const theta = (lat / latSegments) * Math.PI;
        const sinT = Math.sin(theta);
        const cosT = Math.cos(theta);
        const row: typeof points[0] = [];

        for (let lon = 0; lon <= lonSegments; lon++) {
          const phi = (lon / lonSegments) * Math.PI * 2 + rot;
          const x3 = r * sinT * Math.cos(phi);
          const y3 = r * cosT;
          const z3 = r * sinT * Math.sin(phi);

          const scale = perspective / (perspective + z3);
          row.push({
            x: x3, y: y3, z: z3,
            sx: cx + x3 * scale,
            sy: cy + y3 * scale,
          });
        }
        points.push(row);
      }

      ctx.lineWidth = 0.5;

      // Draw grid lines and diagonals forming right-angle triangles
      for (let lat = 0; lat < latSegments; lat++) {
        for (let lon = 0; lon < lonSegments; lon++) {
          const tl = points[lat][lon];
          const tr = points[lat][lon + 1];
          const bl = points[lat + 1][lon];
          const br = points[lat + 1][lon + 1];

          const avgZ = (tl.z + tr.z + bl.z + br.z) / 4;
          const normalDepth = (avgZ + r) / (2 * r);
          const alpha = 0.04 + normalDepth * 0.18;

          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;

          // Horizontal line
          ctx.beginPath();
          ctx.moveTo(tl.sx, tl.sy);
          ctx.lineTo(tr.sx, tr.sy);
          ctx.stroke();

          // Vertical line
          ctx.beginPath();
          ctx.moveTo(tl.sx, tl.sy);
          ctx.lineTo(bl.sx, bl.sy);
          ctx.stroke();

          // Diagonal (creates two right-angle triangles)
          ctx.beginPath();
          ctx.moveTo(tr.sx, tr.sy);
          ctx.lineTo(bl.sx, bl.sy);
          ctx.stroke();
        }
      }

      // Bottom edges of last row
      for (let lon = 0; lon < lonSegments; lon++) {
        const bl = points[latSegments][lon];
        const br = points[latSegments][lon + 1];
        const avgZ = (bl.z + br.z) / 2;
        const alpha = 0.04 + ((avgZ + r) / (2 * r)) * 0.18;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(bl.sx, bl.sy);
        ctx.lineTo(br.sx, br.sy);
        ctx.stroke();
      }

      // Right edges of last column
      for (let lat = 0; lat < latSegments; lat++) {
        const tr = points[lat][lonSegments];
        const br = points[lat + 1][lonSegments];
        const avgZ = (tr.z + br.z) / 2;
        const alpha = 0.04 + ((avgZ + r) / (2 * r)) * 0.18;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(tr.sx, tr.sy);
        ctx.lineTo(br.sx, br.sy);
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

        let px = orbit.radius * Math.cos(a);
        let py = 0;
        let pz = orbit.radius * Math.sin(a);

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

  const sorted = [...positions].sort((a, b) => a.z - b.z);

  return (
    <>
      {sorted.map(({ tech, x, y, z, scale }) => {
        const maxR = 250;
        const normalZ = (z + maxR) / (2 * maxR);

        const opacity = normalZ < 0.35 ? 0.15
          : normalZ < 0.65 ? 0.15 + ((normalZ - 0.35) / 0.3) * 0.85
          : 1;
        const containerScale = 0.6 + normalZ * 0.5;
        const isFront = normalZ > 0.5;

        const grayscale = normalZ < 0.65 ? (1 - normalZ) * 100 : 0;
        const brightness = normalZ < 0.65 ? 0.5 + normalZ * 0.5 : 1;
        const blur = normalZ < 0.5 ? (1 - normalZ) * 0.5 : 0;

        return (
          <div
            key={tech.name}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${containerScale * scale})`,
              opacity,
              zIndex: Math.round(normalZ * 20),
              pointerEvents: isFront ? "auto" : "none",
              transition: "opacity 0.5s ease-out, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <div className="relative z-10 drop-shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group hover:scale-[1.35] cursor-pointer">
              <tech.icon size={56} color={tech.color} style={{
                filter: `grayscale(${grayscale}%) brightness(${brightness}) blur(${blur}px)`,
                transition: "filter 0.3s",
              }} />
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-[11px] font-bold tracking-wider uppercase text-center whitespace-nowrap px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none"
                style={{
                  color: "#fff",
                  background: "var(--accent, #8b5cf6)",
                  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.4)",
                }}
              >
                {tech.name}
              </span>
            </div>
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

  const orbits: OrbitConfig[] = [
    {
      items: techItems.slice(0, 7),
      radius: globeRadius,
      speed: 0.3,
      tilt: [0, 0],
    },
    {
      items: techItems.slice(7, 13),
      radius: globeRadius * 0.95,
      speed: -0.25,
      tilt: [Math.PI / 2, 0],
    },
    {
      items: techItems.slice(13),
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
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl"
              style={{ width: responsiveSize * 0.7, height: responsiveSize * 0.7 }}
            />

            <WireGlobe size={responsiveSize} />

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
