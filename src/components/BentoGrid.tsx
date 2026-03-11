"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] } },
};

export default function BentoGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
    >
      {/* Big card — What I do */}
      <motion.div
        variants={item}
        className="bento-card glow-border md:col-span-2 bg-card border border-border rounded-3xl p-8 group hover:bg-card-hover transition-colors"
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-mono text-accent uppercase tracking-widest">What I Do</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight">
          I lead teams to build <span className="gradient-text">production-grade</span> platforms,{" "}
          <span className="gradient-text">AI products</span>, and{" "}
          <span className="gradient-text">voice agents</span>, from strategy to deployment.
        </p>
        <p className="mt-4 text-fg-secondary leading-relaxed">
          I don&apos;t just write code. I own the full lifecycle: client acquisition, project planning, architecture, team execution, deployment, and long-term maintenance. End to end.
        </p>
      </motion.div>

      {/* Stats card */}
      <motion.div
        variants={item}
        className="bento-card glow-border bg-card border border-border rounded-3xl p-8 flex flex-col justify-between hover:bg-card-hover transition-colors"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">Track Record</span>
        <div className="mt-6 space-y-4">
          {[
            { n: "5+", l: "Years of leadership" },
            { n: "3", l: "Companies scaled" },
            { n: "10+", l: "Products shipped" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-3xl font-bold gradient-text">{s.n}</span>
              <span className="text-xs text-fg-secondary">{s.l}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Leadership */}
      <motion.div
        variants={item}
        className="bento-card glow-border bg-card border border-border rounded-3xl p-8 hover:bg-card-hover transition-colors"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">Leadership</span>
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Team & Client Lead</h3>
          </div>
          <p className="text-fg-secondary text-sm leading-relaxed">
            Led cross-functional teams, managed client relationships, drove project planning through execution to delivery. Individual, team, and multi-team scale.
          </p>
        </div>
      </motion.div>

      {/* AI & Voice */}
      <motion.div
        variants={item}
        className="bento-card glow-border bg-card border border-border rounded-3xl p-8 hover:bg-card-hover transition-colors"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">AI Products</span>
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold">AI & Voice</h3>
          </div>
          <p className="text-fg-secondary text-sm leading-relaxed">
            Chatbot platforms with LLM integration, dental receptionist voice AI, and automated appointment booking agents.
          </p>
        </div>
      </motion.div>

      {/* Currently */}
      <motion.div
        variants={item}
        className="bento-card glow-border bg-card border border-border rounded-3xl p-8 hover:bg-card-hover transition-colors"
      >
        <span className="text-xs font-mono text-accent uppercase tracking-widest">Currently at</span>
        <div className="mt-6">
          <h3 className="text-xl font-bold">DigitLabs</h3>
          <p className="text-accent text-sm mt-1">Full Stack Engineer</p>
          <p className="text-fg-secondary text-sm mt-3 leading-relaxed">
            Leading AI chatbot platform development, managing client deliverables, and architecting end-to-end solutions with Django, Celery & Redis.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={item}
        className="bento-card glow-border bg-gradient-to-br from-accent/10 to-accent-2/10 border border-accent/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:from-accent/15 hover:to-accent-2/15 transition-colors"
      >
        <p className="text-lg font-bold mb-2">Have a vision?</p>
        <p className="text-fg-secondary text-sm mb-5">I&apos;ll plan it, build it, and ship it.</p>
        <MagneticButton
          as="a"
          href="mailto:huzaifaathar1@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start a conversation
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </MagneticButton>
      </motion.div>
    </motion.div>
  );
}
