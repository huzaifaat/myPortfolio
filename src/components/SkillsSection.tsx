"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";

const row1 = ["Python", "JavaScript", "TypeScript", "Django", "FastAPI", "React.js", "Next.js", "Redux", "HTML/CSS"];
const row2 = ["PostgreSQL", "MySQL", "Redis", "AWS", "Docker", "Git", "Azure", "Celery", "WebSockets", "Tailwind CSS", "Material UI", "Pandas", "NumPy"];

const skillCategories = [
  {
    title: "Backend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    skills: ["Django", "FastAPI", "Python", "Celery", "Redis", "REST APIs"],
    description: "Scalable backend systems, async processing, microservices architecture",
  },
  {
    title: "Frontend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind", "Material UI"],
    description: "Responsive UIs, component libraries, modern JavaScript frameworks",
  },
  {
    title: "DevOps & Data",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    skills: ["AWS (EC2, S3)", "Docker", "PostgreSQL", "MySQL", "Git", "Azure"],
    description: "Cloud deployments, containerization, database optimization",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">Skills & Expertise</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Marquee rows */}
        <Marquee items={row1} />
        <Marquee items={row2} reverse />

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card glow-border bg-card border border-border rounded-2xl p-6 group hover:bg-card-hover transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
              <p className="text-fg-secondary text-sm mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-accent/5 text-accent border border-accent/10">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
