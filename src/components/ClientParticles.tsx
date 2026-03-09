"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

export default function ClientParticles() {
  return <ParticleField />;
}
