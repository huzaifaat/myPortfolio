import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Huzaifa Athar — Full Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* HA logo */}
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 900,
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 24,
          }}
        >
          HA
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Huzaifa Athar
        </div>

        {/* Role */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            marginTop: 16,
          }}
        >
          Full Stack Developer & AI Engineer
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "#a1a1aa",
            marginTop: 16,
          }}
        >
          Engineering intelligent systems that shape tomorrow
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            fontSize: 16,
            color: "#71717a",
          }}
        >
          huzaifaathar.com
        </div>
      </div>
    ),
    { ...size }
  );
}
