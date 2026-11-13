import {
  Award,
  BarChart,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Smartphone,
} from "lucide-react"
import type { DomainCard, DomainSkill, SkillBar } from "./types"

export type StackGroupKey =
  | "devsecops"
  | "mlops"
  | "agentic"
  | "cloud"
  | "data"
  | "web"
  | "mobile"

export type StackGroup = {
  key: StackGroupKey
  title: string
  subtitle: string
  tools: string[]
  featured?: boolean
}

// The three featured groups lead the skills section — they map directly to
// the 2026 identity (DevSecOps engineer · ML engineer · agentic AI engineer).
export const skillStacks: StackGroup[] = [
  {
    key: "devsecops",
    title: "DevSecOps",
    subtitle: "secure · observable · repeatable",
    featured: true,
    tools: [
      "Trivy",
      "Grype",
      "Snyk",
      "Cosign",
      "Sigstore",
      "SLSA",
      "OPA / Gatekeeper",
      "Kyverno",
      "Falco",
      "Vault",
      "External Secrets",
      "Pod Security Standards",
      "NetworkPolicies",
      "GitHub Actions",
      "ArgoCD",
      "Flux",
      "Terraform",
      "Pulumi",
    ],
  },
  {
    key: "mlops",
    title: "MLOps",
    subtitle: "train · evaluate · monitor · retrain",
    featured: true,
    tools: [
      "MLflow",
      "Weights & Biases",
      "DVC",
      "Feast",
      "Kubeflow",
      "Ray",
      "Triton",
      "BentoML",
      "Evidently",
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
    ],
  },
  {
    key: "agentic",
    title: "Agentic AI",
    subtitle: "tools · memory · evals · guardrails",
    featured: true,
    tools: [
      "LangChain",
      "LangGraph",
      "Model Context Protocol",
      "Vercel AI Gateway",
      "AI SDK v6",
      "Qdrant",
      "pgvector",
      "Braintrust",
      "Promptfoo",
      "LangSmith",
      "DeepEval",
      "Guardrails",
    ],
  },
  {
    key: "cloud",
    title: "Cloud & Platform",
    subtitle: "AWS · GCP · Azure · Vercel",
    tools: [
      "Linux (Ubuntu/Debian/RHEL)",
      "Bash Scripting",
      "Docker",
      "Kubernetes",
      "Helm",
      "AWS",
      "GCP",
      "Azure",
      "Vercel",
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
      "Istio",
    ],
  },
  {
    key: "data",
    title: "Data",
    subtitle: "relational · vector · analytical",
    tools: [
      "NumPy",
      "Pandas",
      "scikit-learn",
      "PostgreSQL",
      "pgvector",
      "MySQL",
      "MongoDB",
      "Redis",
      "Qdrant",
      "Snowflake",
      "Firebase",
      "Supabase",
    ],
  },
  {
    key: "web",
    title: "Web & Systems",
    subtitle: "full-stack & enterprise",
    tools: [
      "Python (Django / Flask)",
      "Laravel",
      "React",
      "Git",
      "Next.js",
      "TypeScript",
      "PHP",
      "Livewire",
      "Tailwind",
      "FastAPI",
      "shadcn/ui",
      "Node.js",
      "Spring Boot",
    ],
  },
  {
    key: "mobile",
    title: "Mobile",
    subtitle: "cross-platform · native",
    tools: [
      "Flutter",
      "React Native",
      "Kotlin",
      "Swift",
      "Firebase",
      "App Store / Play",
    ],
  },
]

export const skillBars: SkillBar[] = [
  { skill: "Python (Django · Flask · FastAPI) & REST APIs", pct: 92 },
  { skill: "Linux Systems Administration & Bash Scripting", pct: 92 },
  { skill: "Full-Stack Web Engineering (Laravel · React · Git)", pct: 90 },
  { skill: "Docker & Kubernetes Cloud-Native Orchestration", pct: 90 },
  { skill: "Machine Learning & Data Analysis (NumPy · Pandas · scikit-learn)", pct: 88 },
  { skill: "DevSecOps · CI/CD (GitHub Actions) & IaC (Terraform)", pct: 92 },
  { skill: "Mobile Development (Flutter & React Native)", pct: 85 },
  { skill: "Agentic systems · MCP · LangGraph · evals", pct: 85 },
  { skill: "Relational & Distributed Databases (PostgreSQL, MySQL)", pct: 86 },
]

export const domainSkills: DomainSkill[] = [
  { skill: "Cloud Security", icon: Cloud },
  { skill: "DevSecOps & CI/CD", icon: Code },
  { skill: "Applied ML", icon: BarChart },
  { skill: "Agentic AI", icon: Cpu },
  { skill: "Full-stack Web", icon: Globe },
  { skill: "Mobile (Flutter, RN)", icon: Smartphone },
  { skill: "Data & Vector Stores", icon: Database },
  { skill: "Engineering Leadership", icon: Award },
]

export const domainCards: DomainCard[] = [
  {
    iconKey: "cloud",
    iconTint: "text-primary",
    iconBg: "bg-primary/10",
    borderColor: "border-t-primary",
    title: "DevSecOps & Cloud",
    desc: "Secure CI/CD, Kubernetes hardening, supply-chain controls (SBOM + Sigstore + OPA), and SRE observability stacks across AWS, Azure, and GCP.",
    tags: [
      "SLSA",
      "Sigstore",
      "OPA",
      "Trivy",
      "Kubernetes",
      "Terraform",
      "Prometheus",
    ],
  },
  {
    iconKey: "brain",
    iconTint: "text-purple-400",
    iconBg: "bg-purple-500/10",
    borderColor: "border-t-purple-400",
    title: "ML & Agentic AI",
    desc: "End-to-end applied ML, RAG pipelines with rigorous evals, and agentic systems on LangChain + LangGraph with MCP-exposed tool surfaces.",
    tags: [
      "LangChain",
      "LangGraph",
      "MCP",
      "Qdrant",
      "Braintrust",
      "PyTorch",
      "MLflow",
    ],
  },
  {
    iconKey: "phone",
    iconTint: "text-green-400",
    iconBg: "bg-green-500/10",
    borderColor: "border-t-green-400",
    title: "Full-stack & Mobile",
    desc: "Next.js 16 + React 19 on Vercel, Spring Boot services, and Flutter / React Native mobile apps with secure auth and payments.",
    tags: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "Flutter",
      "React Native",
      "Kotlin",
      "Spring Boot",
    ],
  },
]
