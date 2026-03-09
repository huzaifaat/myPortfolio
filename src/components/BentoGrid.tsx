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
          I build <span className="gradient-text">production-grade</span> web platforms,{" "}
          <span className="gradient-text">AI chatbots</span> that understand context, and{" "}
          <span className="gradient-text">voice agents</span> that talk to your customers.
        </p>
        <p className="mt-4 text-fg-secondary leading-relaxed">
          From Django backends handling millions of requests to React frontends your users love — I architect the full picture, then ship it to AWS.
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
            { n: "5+", l: "Years shipping code" },
            { n: "3", l: "Companies scaled" },
            { n: "10+", l: "Products launched" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline justify-between border-b border-border pb-3">
              <span className="text-3xl font-bold gradient-text">{s.n}</span>
              <span className="text-xs text-fg-secondary">{s.l}</span>
            </div>
          ))}
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
            Building AI chatbot platforms, analytics dashboards & logistics systems with Django, Celery & Redis.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={item}
        className="bento-card glow-border bg-gradient-to-br from-accent/10 to-accent-2/10 border border-accent/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:from-accent/15 hover:to-accent-2/15 transition-colors"
      >
        <p className="text-lg font-bold mb-2">Have an idea?</p>
        <p className="text-fg-secondary text-sm mb-5">Let&apos;s turn it into production code.</p>
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
