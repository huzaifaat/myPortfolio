"use client";

import { motion } from "framer-motion";

type Outcome = {
  value: string;
  label: string;
  valueClass?: string;
};

type CaseStudy = {
  id: string;
  industry: string;
  title: string;
  context: string;
  problem: string;
  shipped: string[];
  outcomes: Outcome[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "case-rail",
    industry: "Rail & Manufacturing",
    title: "Months of compliance reading, done in minutes",
    context: "Safety-critical rail systems manufacturer, Germany",
    problem:
      "Senior engineers cross-referenced product specifications against regulation and past certifications by hand, taking weeks to months per pass.",
    shipped: [
      "Agentic pipeline reading specification, regulation and certification history together",
      "Supervisor-worker agent architecture with each agent scoped to one job",
      "Every conclusion tied to its source documents",
      "Engineer review and approval on every output",
    ],
    outcomes: [
      { value: "Weeks to minutes", label: "Per compliance cross-reference", valueClass: "text-lg md:text-xl" },
      { value: "100%", label: "Conclusions linked to source evidence" },
      { value: "100%", label: "Outputs reviewed by an engineer" },
    ],
  },
  {
    id: "case-fintech",
    industry: "FinTech",
    title: "Real-time risk scoring and fraud detection",
    context: "Payments platform, 40M+ transactions per month, US and EU",
    problem:
      "Fraud losses grew faster than volume, models refreshed only quarterly, and manual review took six hours per case.",
    shipped: [
      "Real-time scoring service (sub-50ms at p99)",
      "Graph-based fraud feature store across accounts, devices and merchants",
      "Eval harness with golden fraud sets gating every release",
      "Analyst case console where the model abstains and humans decide",
    ],
    outcomes: [
      { value: "-42%", label: "False positives" },
      { value: "11 min", label: "Case review, was 6 hrs" },
      { value: "Daily", label: "Model refresh, was quarterly" },
    ],
  },
  {
    id: "case-insurance",
    industry: "Insurance",
    title: "AI document intelligence and workflow agents",
    context: "Insurance operations, 60,000 documents per month, 4 systems of record",
    problem:
      "Claims and correspondence were keyed in by hand, with 14-day backlogs and errors caught weeks later.",
    shipped: [
      "LLM extraction pipeline with confidence-gated outputs",
      "Workflow agents filing into four systems of record",
      "Exception review console",
      "Continuous evaluation against human corrections",
    ],
    outcomes: [
      { value: "4 hrs", label: "Processing, was 14 days" },
      { value: "78%", label: "Straight-through, from 12%" },
      { value: "1,200", label: "Analyst hrs/month reclaimed" },
    ],
  },
  {
    id: "case-healthcare",
    industry: "Healthcare",
    title: "HIPAA-compliant patient analytics and AI pipelines",
    context: "Provider network, 12 sites, United States",
    problem:
      "Leadership needed population-health insight, but patient data could not leave the compliance boundary and analyses waited weeks.",
    shipped: [
      "Governed lakehouse inside the client's own cloud tenancy",
      "De-identification at ingestion",
      "Readmission-risk models with clinician-readable audit trails",
      "Role-based, row-level access",
    ],
    outcomes: [
      { value: "Same day", label: "Time to insight, was 3 wks" },
      { value: "0.84", label: "Readmission AUC, from 0.68" },
      { value: "Zero", label: "PHI incidents in 24 months" },
    ],
  },
  {
    id: "case-logistics",
    industry: "Supply Chain",
    title: "Real-time route optimisation and demand forecasting",
    context: "Regional 3PL, 400+ vehicles, 6 distribution centres",
    problem:
      "Routes were planned overnight on stale demand data, causing half-empty return trips and stockouts.",
    shipped: [
      "Live demand model on streaming telemetry",
      "Event-triggered route re-optimisation",
      "SKU-level forecasts wired into replenishment",
      "Planner console with auditable overrides",
    ],
    outcomes: [
      { value: "-18%", label: "Cost per route" },
      { value: "93%", label: "Forecast accuracy, from 71%" },
      { value: "-37%", label: "Stockout events, YoY" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32 px-6">
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
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            From problem to <span className="font-serif italic font-normal gradient-text">production</span>
          </h2>
          <p className="mt-5 text-fg-secondary max-w-2xl leading-relaxed">
            From problem to production: how I take AI systems from diagnosis to measurable outcomes.
          </p>
        </motion.div>

        {/* Panels */}
        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              id={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] }}
              className="scroll-mt-24 bento-card glow-border bg-card border border-border rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-card-hover transition-colors"
            >
              {/* Top: industry tag, title, context */}
              <div className="text-[10px] font-mono text-accent uppercase tracking-[0.18em] mb-3">
                {cs.industry}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                {cs.title}
              </h3>
              <p className="mt-2 text-sm text-fg-secondary">{cs.context}</p>

              {/* Body: two columns on desktop, single on mobile */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Left: problem + shipped */}
                <div>
                  <div>
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">The Problem</span>
                    <p className="mt-3 text-fg-secondary text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">What Shipped</span>
                    <ul className="mt-3 space-y-2.5">
                      {cs.shipped.map((point) => (
                        <li key={point} className="flex gap-3 text-sm text-fg-secondary leading-relaxed">
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: outcome tiles */}
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">Outcomes</span>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cs.outcomes.map((o) => (
                      <div
                        key={o.label}
                        className="rounded-2xl border border-border bg-bg-secondary/40 p-4 flex flex-col justify-between min-h-[112px]"
                      >
                        <span className={`${o.valueClass ?? "text-2xl md:text-3xl"} font-bold gradient-text leading-tight break-words`}>
                          {o.value}
                        </span>
                        <span className="mt-2 text-[11px] text-fg-secondary leading-snug">
                          {o.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
