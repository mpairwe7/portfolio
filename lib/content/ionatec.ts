/**
 * IONATECH — startup company (ionatec.com)
 *
 * Source: https://ionatec.com (title: "IONATECH"),
 *   fetched 2026-04-19. Homepage is a Vite SPA so richer copy could not be
 *   scraped non-interactively. Below is a structural scaffold — fields
 *   marked `// USER:` should be replaced with the founders' approved copy.
 *
 *   Update via PR only.
 */

export const ionatec = {
  name: "IONATECH",
  shortName: "IONATECH",
  url: "https://ionatec.com",
  role: "Co-founder · ML Engineer",
  // USER: 1-line mission that appears under the logo
  tagline: "A startup shipping production AI for East African operators.",
  // USER: 2–3 sentence paragraph describing what IONATECH is and who it serves
  mission:
    "IONATECH is a Kampala-based startup building applied ML, agentic AI, and secure cloud systems for emerging-market operators. We ship production AI products for businesses across East Africa.",
  // USER: 1–3 product or program lines
  products: [
    "Applied ML & Agentic AI product builds",
    "Custom-built LLM agents for SMB operators in East Africa",
    "DevSecOps & cloud-architecture consulting",
  ],
  // USER: exact stack the studio is betting on
  stack: [
    "LangChain",
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
