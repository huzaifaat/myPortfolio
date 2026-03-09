"use client";

import { motion } from "framer-motion";

const agents = [
  {
    title: "Dental Receptionist AI",
    description:
      "An AI-powered voice agent that handles incoming calls for dental clinics — greeting patients, answering FAQs about services, hours, and insurance, and routing calls to the right department.",
    features: ["Natural conversation flow", "FAQ handling", "Call routing", "24/7 availability"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Appointment Booking Agent",
    description:
      "A conversational AI agent that schedules, reschedules, and cancels appointments via voice. Integrates with calendar systems, handles time zone logic, and sends confirmations.",
    features: ["Smart scheduling", "Calendar integration", "Rescheduling & cancellation", "Confirmation notifications"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
];

function VoiceAIVisual() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Outer pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-accent/10"
          style={{ width: 100 + i * 60, height: 100 + i * 60 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.5, ease: "easeInOut" }}
        />
      ))}

      {/* Center orb */}
      <motion.div
        className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl" />

        {/* Inner circle */}
        <div className="relative w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shadow-xl shadow-accent/30">
          {/* AI icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
        </div>
      </motion.div>

      {/* Sound wave bars — left side */}
      <div className="absolute left-[8%] sm:left-[15%] flex items-center gap-1 h-16 sm:h-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`l-${i}`}
            className="w-1 rounded-full bg-accent/40"
            animate={{ height: [12, 20 + Math.random() * 30, 12] }}
            transition={{ repeat: Infinity, duration: 0.8 + Math.random() * 0.6, delay: i * 0.08, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Sound wave bars — right side */}
      <div className="absolute right-[8%] sm:right-[15%] flex items-center gap-1 h-16 sm:h-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`r-${i}`}
            className="w-1 rounded-full bg-accent-2/40"
            animate={{ height: [12, 20 + Math.random() * 30, 12] }}
            transition={{ repeat: Infinity, duration: 0.8 + Math.random() * 0.6, delay: i * 0.08, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Floating labels */}
      <motion.div
        className="absolute top-8 right-[5%] sm:right-[10%] bg-card border border-border rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono text-accent">Voice Recognition</span>
      </motion.div>

      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-[5%] sm:left-[10%] bg-card border border-border rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono text-accent-2">NLP Processing</span>
      </motion.div>

      <motion.div
        className="absolute top-[35%] left-[2%] sm:left-[5%] bg-card border border-border rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg hidden sm:block"
        animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono text-fg-secondary">Real-time Response</span>
      </motion.div>
    </div>
  );
}

export default function VoiceAgentsSection() {
  return (
    <section id="voice-agents" className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">AI Voice Agents</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Voice <span className="gradient-text">AI Products</span>
          </h2>
          <p className="mt-4 text-fg-secondary max-w-lg mx-auto">
            I build intelligent voice agents that handle real conversations — from dental reception to appointment scheduling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Voice AI Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <VoiceAIVisual />
          </motion.div>

          {/* Agent Cards */}
          <div className="space-y-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
                className="bento-card glow-border bg-card border border-border rounded-2xl p-6 group hover:bg-card-hover transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    {agent.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{agent.title}</h3>
                    <p className="text-fg-secondary text-sm mt-2 leading-relaxed">{agent.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {agent.features.map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
