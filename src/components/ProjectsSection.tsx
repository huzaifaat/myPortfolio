"use client";

import { motion } from "framer-motion";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
};

const projects: Project[] = [
  {
    number: "01",
    category: "Electric Vehicles",
    title: "EV Charging Station Locator",
    description:
      "Built a mobile application helping electric vehicle owners find the nearest available charging stations in real-time. Features include route optimization, live availability status, and turn-by-turn navigation to the closest compatible station.",
    metric: "Real-time",
    metricLabel: "Station Discovery · Route Optimized",
  },
  {
    number: "02",
    category: "Electric Vehicles",
    title: "Battery Testing & Certification Platform",
    description:
      "Developed an end-to-end platform connecting battery testing labs with EV manufacturers. Labs schedule tests, manage workflows, and deliver certified results, giving both sides a single source of truth from prototype to production-ready battery.",
    metric: "Lab to production",
    metricLabel: "Full Testing Lifecycle",
  },
  {
    number: "03",
    category: "Food & Hospitality",
    title: "Multi-Branch Restaurant Operations Suite",
    description:
      "Built a SaaS platform managing restaurant inventory, custom and general recipes, and supplier coordination across multiple branches. Both restaurant operators and suppliers manage their side of the workflow in one unified system.",
    metric: "Multi-branch",
    metricLabel: "Inventory · Recipes · Suppliers",
  },
  {
    number: "04",
    category: "AI / RAG",
    title: "Data Intelligence Chatbot",
    description:
      "Engineered a custom RAG pipeline sourcing from a data lake, refining data through transformation layers, and powering an LLM-driven chatbot. Clients query their own knowledge base conversationally and get accurate, context-aware responses in seconds.",
    metric: "Data lake → insight",
    metricLabel: "Custom RAG · LLM Powered",
  },
  {
    number: "05",
    category: "Enterprise Data",
    title: "Data Quality Guardian — 15 Countries",
    description:
      "Built an automated data quality monitoring platform spanning 15 countries. Detects anomalies, generates severity-based alerts, creates ServiceNow tickets automatically, and routes them to the right person based on issue type and severity level.",
    metric: "15 countries",
    metricLabel: "Real-time Monitoring · ServiceNow",
  },
  {
    number: "06",
    category: "Digital Growth",
    title: "AutoShine — 4× Revenue Transformation",
    description:
      "Led the complete digital transformation for a US-based automotive shop. Built the website from scratch, managed social media presence, ran Meta ad campaigns, and optimized SEO, turning a few hundred dollars in ad spend into a 4× monthly revenue increase.",
    metric: "4× revenue",
    metricLabel: "Web · Meta Ads · SEO · Social",
  },
  {
    number: "07",
    category: "Voice AI",
    title: "Dental Receptionist AI Agent",
    description:
      "Built a Dutch and English AI voice receptionist using ElevenLabs for a dental clinic. Handles incoming calls autonomously, greeting patients, answering FAQs about services, hours, and insurance, routing calls, and booking appointments 24/7.",
    metric: "24/7",
    metricLabel: "Autonomous Call Handling",
  },
  {
    number: "08",
    category: "Voice AI",
    title: "Appointment Booking Voice Agent",
    description:
      "Developed a conversational AI agent that schedules, reschedules, and cancels appointments entirely through voice. Integrates with calendar systems, handles timezone logic, sends confirmations, and manages the full booking lifecycle hands-free.",
    metric: "Voice-first",
    metricLabel: "Scheduling · Calendar · Confirmations",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-fg-secondary/40" />
            <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            What <span className="font-serif italic font-normal gradient-text">I&apos;ve Built</span>
          </h2>
        </motion.div>

        {/* Editorial grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className="border border-border bg-bg-secondary/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project, i) => {
            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.05 * i,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="group relative p-8 lg:p-10 flex flex-col min-h-[420px] -mt-px -ml-px border-t border-l border-border transition-colors duration-300 hover:bg-card-hover/60"
              >
                {/* Faded number */}
                <div
                  aria-hidden
                  className="text-7xl font-bold leading-none text-fg/10 select-none mb-6 transition-colors duration-300 group-hover:text-accent/20"
                >
                  {project.number}
                </div>

                {/* Category */}
                <div className="text-[10px] font-mono text-accent uppercase tracking-[0.18em] mb-3">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-bold leading-snug text-fg mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] leading-relaxed text-fg-secondary mb-6">
                  {project.description}
                </p>

                {/* Spacer pushes metric to bottom */}
                <div className="mt-auto">
                  {/* Accent rule */}
                  <div className="h-px w-10 bg-accent mb-4" />

                  {/* Metric */}
                  <div className="font-serif italic text-2xl text-fg leading-tight">
                    {project.metric}
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-fg-secondary uppercase tracking-[0.15em]">
                    {project.metricLabel}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
