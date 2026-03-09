"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const links = [
  {
    label: "Email",
    value: "huzaifaathar1@gmail.com",
    href: "mailto:huzaifaathar1@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "huzaifa-athar",
    href: "https://linkedin.com/in/huzaifa-athar-b048a2120",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+92-323-4125331",
    href: "tel:+923234125331",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">Contact</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="mt-4 text-fg-secondary max-w-md mx-auto">
            Got a project in mind? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Big email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <MagneticButton
            as="a"
            href="mailto:huzaifaathar1@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-fg text-bg rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-fg/10"
          >
            Say Hello
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </MagneticButton>
        </motion.div>

        {/* Contact links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="bento-card glow-border bg-card border border-border rounded-2xl p-6 text-center group hover:bg-card-hover transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                {link.icon}
              </div>
              <p className="font-semibold text-sm">{link.label}</p>
              <p className="text-fg-secondary text-xs mt-1">{link.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
