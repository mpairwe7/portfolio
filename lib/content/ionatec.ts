/**
 * Ionatec — Iona Institute of Technology
 *
 * Source: https://ionatec.com (title: "Iona Institute of Technology"),
 *   fetched 2026-04-19. Homepage is a Vite SPA so richer copy could not be
 *   scraped non-interactively. Below is a structural scaffold — fields
 *   marked `// USER:` should be replaced with the founders' approved copy.
 *
 *   Update via PR only.
 */

export const ionatec = {
  name: "Iona Institute of Technology",
  shortName: "Ionatec",
  url: "https://ionatec.com",
  role: "Co-founder · ML Engineer",
  // USER: 1-line mission that appears under the logo
  tagline: "Building an engineering institute where East African talent ships production AI.",
  // USER: 2–3 sentence paragraph describing what Ionatec is and who it serves
  mission:
    "Iona Institute of Technology is a Kampala-based engineering studio and academy building applied ML, agentic AI, and secure cloud systems for emerging-market operators. We train engineers on real production stacks — and ship the products they train on.",
  // USER: 1–3 product or program lines
  products: [
    "Applied ML & Agentic AI Residency",
    "Custom-built LLM agents for SMB operators in East Africa",
    "DevSecOps & cloud-architecture consulting",
  ],
  // USER: exact stack the studio is betting on
  stack: [
    "Claude Agent SDK",
    "LangGraph",
    "Python",
    "TypeScript",
    "Next.js",
    "Vercel",
    "AWS",
    "PostgreSQL",
    "Qdrant",
  ],
  // USER: one-line status for the badge — e.g., "Public beta · Kampala"
  status: "Building in public · Kampala",
  // USER: optional quote for the founder line
  founderLine:
    "Co-founded with a mission to turn African engineering talent into global AI operators.",
} as const
