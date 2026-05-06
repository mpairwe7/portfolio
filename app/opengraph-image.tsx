import { ImageResponse } from "next/og"
import { profile } from "@/lib/content/profile"

export const runtime = "nodejs"
export const alt = `${profile.fullName} — DevSecOps · ML · Agentic AI Engineer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0c0a09",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 30% 20%, rgba(245, 165, 35, 0.28), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 90%, rgba(245, 120, 35, 0.18), transparent 70%)",
          color: "#fafaf9",
          padding: "80px 96px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#f5a523",
            fontSize: 20,
            fontFamily: "monospace",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginTop: "auto",
            marginBottom: 32,
          }}
        >
          Portfolio · 2026 · Kampala
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -4,
            marginBottom: 40,
          }}
        >
          {profile.fullName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#a8a29e",
            lineHeight: 1.3,
            maxWidth: 920,
            marginBottom: 56,
          }}
        >
          DevSecOps · ML · Agentic AI · Ionatec Co-founder · Sauti Health Partner
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            fontFamily: "monospace",
            fontSize: 22,
            color: "#d6d3d1",
          }}
        >
          {["DevSecOps", "LangGraph", "MCP", "Kubernetes", "Trivy"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                border: "1px solid rgba(245, 165, 35, 0.25)",
                background: "rgba(245, 165, 35, 0.06)",
                borderRadius: 999,
                padding: "10px 20px",
                color: "#f5a523",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 96,
            width: 220,
            height: 220,
            borderRadius: 999,
            background:
              "radial-gradient(closest-side, rgba(245, 165, 35, 0.6), transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>
    ),
    size
  )
}
