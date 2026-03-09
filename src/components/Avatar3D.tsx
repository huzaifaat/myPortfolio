"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Avatar3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setImgError(false);
    img.onerror = () => setImgError(true);
    img.src = "/avatar.jpg";
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotate({
      x: ((y - rect.height / 2) / (rect.height / 2)) * -15,
      y: ((x - rect.width / 2) / (rect.width / 2)) * 15,
    });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      className="relative"
    >
      {/* Orbit rings */}
      <div className="absolute inset-[-30px] rounded-full border border-accent/10 animate-[spin_20s_linear_infinite]" />
      <div className="absolute inset-[-60px] rounded-full border border-accent/5 animate-[spin_30s_linear_infinite_reverse]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-accent/20 blur-sm"
        animate={{ y: [-5, 5, -5], x: [3, -3, 3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 -left-2 w-4 h-4 rounded-full bg-accent-2/20 blur-sm"
        animate={{ y: [5, -5, 5], x: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 ? "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)" : "none",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow */}
        <div className="absolute inset-[-15px] rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 blur-2xl" />

        {/* Avatar */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-border shadow-2xl shadow-accent/10">
          {!imgError ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/avatar.jpg"
              alt="Huzaifa Athar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white text-5xl font-bold select-none">
              HA
            </div>
          )}
        </div>

        {/* Status badge */}
        <motion.div
          className="absolute -bottom-2 right-0 bg-card border border-border rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5"
          style={{ transform: "translateZ(40px)" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[11px] font-medium">Available for work</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
