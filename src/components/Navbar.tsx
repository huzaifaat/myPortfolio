"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Voice AI", href: "#voice-agents" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/60 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActive("Home")}
          className="flex items-center gap-2"
        >
          <span className="text-lg font-black tracking-tight">
            Huzaifa
            <span className="gradient-text">.</span>
          </span>
        </a>

        {/* Center — email */}
        <a
          href="mailto:huzaifaathar1@gmail.com"
          className="hidden lg:block text-xs font-mono text-fg-secondary hover:text-accent transition-colors"
        >
         
        </a>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/blog" className="text-sm font-medium tracking-wide uppercase text-fg-secondary hover:text-fg transition-colors">Blog</a>
          {navLinks.filter(l => ["About", "Experience", "Contact"].includes(l.label)).map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.label, link.href)}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                active === link.label ? "text-accent" : "text-fg-secondary hover:text-fg"
              }`}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-fg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              }
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-4 right-4 mt-3 bg-card border border-border rounded-2xl p-2 shadow-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link.label, link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                    active === link.label ? "bg-accent/10 text-accent" : "text-fg-secondary hover:text-fg"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-3 rounded-xl text-sm text-fg-secondary hover:text-accent"
              >
                Blog
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-3 rounded-xl text-sm text-fg-secondary hover:text-accent"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
