import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import VoiceAgentsSection from "@/components/VoiceAgentsSection";
import ContactSection from "@/components/ContactSection";
import CursorFollower from "@/components/CursorFollower";
import ScrollReveal from "@/components/ScrollReveal";
import ClientParticles from "@/components/ClientParticles";

export default function Home() {
  return (
    <div className="noise">
      {/* Immersive backgrounds */}
      <ClientParticles />
      <div className="spotlight" />
      <div className="dot-grid" />

      {/* Custom cursor */}
      <CursorFollower />

      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* ABOUT (Bento) */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">About Me</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                Who <span className="gradient-text">I am</span>
              </h2>
            </div>
          </ScrollReveal>
          <BentoGrid />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="text-xs font-mono text-accent uppercase tracking-[0.2em]">Experience</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                Where I&apos;ve <span className="gradient-text">worked</span>
              </h2>
            </div>
          </ScrollReveal>
          <ExperienceTimeline />
        </div>
      </section>

      {/* VOICE AI AGENTS */}
      <VoiceAgentsSection />

      {/* SKILLS */}
      <SkillsSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-fg-secondary text-xs">
          <span>&copy; 2025 Huzaifa Athar. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="mailto:huzaifaathar1@gmail.com" className="hover:text-accent transition-colors">huzaifaathar1@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
