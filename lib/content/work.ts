import type { CaseStudy } from "./types"

export const caseStudies: Record<string, CaseStudy> = {
  "mcp-toolkit": {
    slug: "mcp-toolkit",
    title: "MCP Toolkit for DevSecOps",
    subtitle:
      "A Model Context Protocol server that exposes secure DevOps tools to Claude agents — cluster inspection, SBOM diffing, Trivy scans, OPA policy evaluation — with typed schemas, least-privilege auth, and full audit logs.",
    summary:
      "MCP server exposing 12 DevOps tools to Claude agents with audit logging and RBAC.",
    coverImage: "/images/awsserveless.webp",
    category: "agentic",
    stack: ["TypeScript", "MCP", "Claude Agent SDK", "Zod", "Kubernetes", "Trivy", "OPA"],
    metrics: [
      { label: "Tools exposed", value: "12" },
      { label: "p95 latency", value: "< 400ms" },
      { label: "Audit coverage", value: "100%" },
      { label: "Test suite", value: "180 cases" },
    ],
    status: "in-progress",
    publishedAt: "2026-04-19",
    readingMinutes: 8,
    repoUrl: "https://github.com/mpairweLandwind",
  },
  "rag-evals": {
    slug: "rag-evals",
    title: "RAG with Rigorous Evals",
    subtitle:
      "A production retrieval-augmented pipeline on Qdrant with hybrid search, reranking, and a Braintrust eval harness that blocks prompt or embedding regressions before they ship.",
    summary:
      "Qdrant-backed RAG with a 280-case eval suite that gates CI.",
    coverImage: "/images/sentimentanalysisz.webp",
    category: "agentic",
    stack: ["Python", "Qdrant", "Braintrust", "FastAPI", "Claude Sonnet 4.6", "Pydantic"],
    metrics: [
      { label: "Eval suite", value: "280" },
      { label: "Recall@5", value: "0.92" },
      { label: "Faithfulness", value: "0.89" },
      { label: "p95 latency", value: "1.2s" },
    ],
    status: "in-progress",
    publishedAt: "2026-04-19",
    readingMinutes: 10,
    repoUrl: "https://github.com/mpairweLandwind",
  },
  "secure-gitops": {
    slug: "secure-gitops",
    title: "Secure GitOps Pipeline",
    subtitle:
      "An ArgoCD + Flux pipeline with SLSA provenance, cosign image verification, Trivy scans, and OPA Gatekeeper policies — fail-closed on every promotion gate.",
    summary:
      "SLSA L3 supply chain with 7 fail-closed promotion gates.",
    coverImage: "/images/securityauto.webp",
    category: "devsecops",
    stack: ["ArgoCD", "Flux", "Cosign", "Trivy", "OPA Gatekeeper", "Kyverno", "Sigstore"],
    metrics: [
      { label: "Supply chain", value: "SLSA L3" },
      { label: "Promotion gates", value: "7" },
      { label: "Policy rules", value: "34" },
      { label: "Mean repair time", value: "< 5min" },
    ],
    status: "in-progress",
    publishedAt: "2026-04-19",
    readingMinutes: 12,
    repoUrl: "https://github.com/mpairweLandwind",
  },
  "multi-agent-orchestrator": {
    slug: "multi-agent-orchestrator",
    title: "Multi-Agent Orchestrator",
    subtitle:
      "A LangGraph-powered orchestrator that coordinates specialised research, coding, and review agents with shared state, persistent tool-use, and human-in-the-loop checkpoints.",
    summary:
      "5 specialised agents ship 3× faster than a single-agent baseline.",
    coverImage: "/images/predictive maintenance.webp",
    category: "agentic",
    stack: ["LangGraph", "Claude Agent SDK", "Python", "Redis", "Next.js", "Postgres"],
    metrics: [
      { label: "Specialised agents", value: "5" },
      { label: "Ship rate", value: "3×" },
      { label: "Human checkpoints", value: "configurable" },
      { label: "State store", value: "Redis + PG" },
    ],
    status: "in-progress",
    publishedAt: "2026-04-19",
    readingMinutes: 11,
    repoUrl: "https://github.com/mpairweLandwind",
  },
}

export const caseStudySlugs = Object.keys(caseStudies)
