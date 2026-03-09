"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ChatInterface from "./ChatInterface";

const roles = ["Full-Stack Developer", "AI Engineer", "Voice Agent Builder"];

function AnimatedRole() {
  return (
    <span className="inline-block overflow-hidden h-[1.15em] align-bottom">
      <motion.span
        className="inline-flex flex-col"
        animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.6, 1] }}
      >
        {roles.map((role) => (
          <span key={role} className="block gradient-text">{role}</span>
        ))}
      </motion.span>
    </span>
  );
}

function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {[
        {
          href: "https://linkedin.com/in/huzaifa-athar-b048a2120",
          label: "LinkedIn",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          ),
        },
        {
          href: "mailto:huzaifaathar1@gmail.com",
          label: "Email",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          ),
        },
        {
          href: "tel:+923234125331",
          label: "Phone",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          ),
        },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label === "LinkedIn" ? "_blank" : undefined}
          rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
          className="w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center text-fg-secondary hover:text-accent hover:border-accent hover:scale-110 transition-all"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
      <div className="w-px h-16 bg-border mx-auto" />
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      <SocialLinks />

      {/* Main hero layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-8 min-h-screen flex flex-col justify-center">
        {/* Top row: Name left, Avatar center, Role right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left: Name */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-fg-secondary text-lg md:text-xl mb-3"
            >
              Hello! I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase"
            >
              HUZAIFA
              <br />
              ATHAR
            </motion.h1>
          </motion.div>

          {/* Center: Avatar with parallax */}
          <motion.div
            style={{ y: avatarY }}
            className="flex justify-center relative"
          >
            {/* Glow behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl scale-150" />

            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="relative"
            >
              {/* Orbit ring */}
              <div className="absolute inset-[-40px] rounded-full border border-accent/10 animate-[spin_25s_linear_infinite]" />
              <div className="absolute inset-[-70px] rounded-full border border-accent/5 animate-[spin_35s_linear_infinite_reverse]" />

              {/* Avatar image */}
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl shadow-accent/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avatar.jpg"
                  alt="Huzaifa Athar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add("bg-gradient-to-br", "from-accent", "to-accent-2", "flex", "items-center", "justify-center");
                    target.parentElement!.innerHTML = '<span class="text-white text-6xl font-black select-none">HA</span>';
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 whitespace-nowrap"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium">Open to opportunities</span>
              </motion.div>

              {/* Floating orbs */}
              <motion.div
                className="absolute -top-6 -right-6 w-8 h-8 rounded-full bg-accent/30 blur-md"
                animate={{ y: [-8, 8, -8], x: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-4 w-5 h-5 rounded-full bg-accent-2/30 blur-sm"
                animate={{ y: [6, -6, 6], x: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Role */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="text-center lg:text-right"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-fg-secondary text-lg md:text-xl mb-3"
            >
              An
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase"
            >
              <AnimatedRole />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 text-fg-secondary text-sm max-w-xs ml-auto hidden lg:block"
            >
              5+ years building production apps, AI chatbots & voice agents with Django, React & Next.js
            </motion.p>
          </motion.div>
        </div>

        {/* Chat interface below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 w-full"
        >
          <ChatInterface />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center text-fg-secondary"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume floating button — bottom right */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="fixed right-6 bottom-8 z-40 hidden lg:flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-accent/30 bg-card/80 backdrop-blur-sm text-fg hover:text-accent hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all group"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Resume</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-y-0.5 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </motion.a>
    </section>
  );
}
