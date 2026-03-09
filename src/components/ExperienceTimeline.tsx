"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "DigitLabs",
    role: "Full Stack Engineer",
    period: "Sept 2024 - Present",
    current: true,
    description:
      "Architecting AI-powered chatbot platform backend with Django. Building analytics dashboards, async task processing with Celery/Redis, and optimizing logistics workflows with PostgreSQL.",
    tech: ["Django", "PostgreSQL", "Celery", "Redis", "Python"],
  },
  {
    company: "MTP",
    role: "Software Engineer",
    period: "Feb 2022 - Aug 2024",
    current: false,
    description:
      "Built full-stack applications across multiple products — Django & FastAPI backends, React & Next.js frontends. Created high-performance microservices and managed AWS infrastructure.",
    tech: ["Django", "FastAPI", "React", "Next.js", "AWS"],
  },
  {
    company: "Codegic",
    role: "Associate Software Engineer",
    period: "Aug 2020 - Feb 2022",
    current: false,
    description:
      "Led frontend development with React, built reusable component libraries, and established structured backend query patterns. Active in Agile ceremonies and code review culture.",
    tech: ["React", "JavaScript", "Django", "PostgreSQL"],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative mt-12">
      {/* Timeline line */}
      <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="relative md:pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 hidden md:flex items-center justify-center">
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                exp.current
                  ? "border-accent bg-accent/10"
                  : "border-border bg-card"
              }`}>
                <div className={`w-3 h-3 rounded-full ${exp.current ? "bg-accent" : "bg-border"}`} />
              </div>
              {exp.current && (
                <div className="absolute w-10 h-10 rounded-full border border-accent" style={{ animation: "pulseRing 2s ease-out infinite" }} />
              )}
            </div>

            {/* Card */}
            <div className="bento-card glow-border bg-card border border-border rounded-2xl p-6 hover:bg-card-hover transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold">{exp.company}</h3>
                    {exp.current && (
                      <span className="text-[10px] font-mono bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                        NOW
                      </span>
                    )}
                  </div>
                  <p className="text-accent text-sm">{exp.role}</p>
                </div>
                <span className="text-xs text-fg-secondary font-mono shrink-0">{exp.period}</span>
              </div>

              <p className="text-fg-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
