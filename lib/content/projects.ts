import type { Project, ProjectTab } from "./types"

export const projects: Project[] = [
  // ── Flagship · Agentic & DevSecOps · "Building in public" ──────────────────
  {
    slug: "mcp-toolkit",
    title: "MCP Toolkit for DevSecOps",
    summary:
      "A Model Context Protocol server exposing secure DevOps tools (cluster inspection, SBOM diffing, Trivy scans, policy-eval) to Claude agents, with typed schemas and audit logs.",
    image: "/images/awsserveless.webp",
    category: "agentic",
    stack: ["TypeScript", "MCP", "Claude Agent SDK", "Zod", "Kubernetes", "Trivy"],
    metrics: [
      { label: "Tools exposed", value: "12" },
      { label: "p95 latency", value: "< 400ms" },
    ],
    status: "in-progress",
    featured: true,
    caseStudySlug: "mcp-toolkit",
    repoUrl: "https://github.com/mpairweLandwind",
  },
  {
    slug: "rag-evals",
    title: "RAG + Rigorous Evals",
    summary:
      "Production retrieval-augmented pipeline on Qdrant with hybrid search, rerank, and a Braintrust-driven eval harness that blocks regressions in CI.",
    image: "/images/sentimentanalysisz.webp",
    category: "agentic",
    stack: ["Python", "Qdrant", "Braintrust", "FastAPI", "Claude Sonnet 4.6"],
    metrics: [
      { label: "Eval suite", value: "280 cases" },
      { label: "Recall@5", value: "0.92" },
    ],
    status: "in-progress",
    featured: true,
    caseStudySlug: "rag-evals",
    repoUrl: "https://github.com/mpairweLandwind",
  },
  {
    slug: "secure-gitops",
    title: "Secure GitOps Pipeline",
    summary:
      "ArgoCD + Flux pipeline with SLSA provenance, cosign image verification, Trivy scans, and OPA Gatekeeper policies — fail-closed on every promotion.",
    image: "/images/securityauto.webp",
    category: "devsecops",
    stack: ["ArgoCD", "Cosign", "Trivy", "OPA", "Kyverno", "Sigstore"],
    metrics: [
      { label: "Supply chain", value: "SLSA L3" },
      { label: "Promotion gates", value: "7" },
    ],
    status: "in-progress",
    featured: true,
    caseStudySlug: "secure-gitops",
    repoUrl: "https://github.com/mpairweLandwind",
  },
  {
    slug: "multi-agent-orchestrator",
    title: "Multi-Agent Orchestrator",
    summary:
      "LangGraph-powered orchestrator that coordinates research, coding, and review agents with shared state, tool-use, and human-in-the-loop checkpoints.",
    image: "/images/predictive maintenance.webp",
    category: "agentic",
    stack: ["LangGraph", "Claude Agent SDK", "Python", "Redis", "Next.js"],
    metrics: [
      { label: "Agents", value: "5 specialised" },
      { label: "Ship rate", value: "3× vs single-agent" },
    ],
    status: "in-progress",
    featured: true,
    caseStudySlug: "multi-agent-orchestrator",
    repoUrl: "https://github.com/mpairweLandwind",
  },

  // ── Shipped work ──────────────────────────────────────────────────────────
  {
    slug: "aws-serverless-ecommerce",
    title: "AWS Serverless E-commerce Platform",
    summary:
      "Scalable e-commerce platform built with AWS Lambda, API Gateway, DynamoDB, and S3 — optimised for high availability and zero-ops scale.",
    image: "/images/awsserveless.webp",
    category: "cloud",
    stack: ["AWS Lambda", "DynamoDB", "API Gateway", "S3", "Serverless"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "cloud-healthcare",
    title: "Cloud Healthcare Management System",
    summary:
      "HIPAA-compliant healthcare platform on AWS using EC2, RDS, and Cognito with encryption at rest and in transit.",
    image: "/images/awsheath.webp",
    category: "cloud",
    stack: ["AWS", "EC2", "RDS", "Cognito", "HIPAA"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "smart-home-iot",
    title: "Smart Home Automation",
    summary:
      "Edge IoT platform using Raspberry Pi + Arduino + AWS IoT Core for remote monitoring and control over MQTT.",
    image: "/images/securityauto.webp",
    category: "iot",
    stack: ["AWS IoT Core", "MQTT", "Raspberry Pi", "Arduino"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "agri-monitoring",
    title: "Agricultural Monitoring",
    summary:
      "IoT solution monitoring soil moisture, temperature, and humidity with real-time alerts and time-series dashboards.",
    image: "/images/openart-image_MH5vlRff_1744475821625_raw.jpg",
    category: "iot",
    stack: ["IoT", "Sensors", "AWS Timestream", "Grafana"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance ML",
    summary:
      "Supervised ML model predicting equipment failures ahead of breakdown — cut unplanned downtime for industrial ops.",
    image: "/images/predictive maintenance.webp",
    category: "mlops",
    stack: ["Python", "scikit-learn", "TensorFlow", "MLflow"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "sentiment-analysis",
    title: "Customer Sentiment Analysis",
    summary:
      "NLP pipeline processing customer feedback and social chatter to score brand perception across channels.",
    image: "/images/sentimentanalysisz.webp",
    category: "mlops",
    stack: ["Python", "NLP", "AWS Comprehend", "Pandas"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "zaloni-desktop",
    title: "Zaloni Dental Management",
    summary:
      "C#/VB.NET desktop suite for inventory, sales, and patient records — single source of truth for the clinic.",
    image: "/images/zaloni.png",
    category: "desktop",
    stack: ["C#", "VB.NET", "SQL Server", "Windows Forms"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "zaloni-mobile",
    title: "Zaloni Dental Hub",
    summary:
      "Flutter mobile app for dental services: online appointments, resource booking, and patient records in hand.",
    image: "/images/zaloni_icon.png",
    category: "mobile",
    stack: ["Flutter", "Dart", "Firebase"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "delipucash",
    title: "Delipucash Fintech",
    summary:
      "React Native fintech app enabling fast, secure digital transactions for individuals and SMBs.",
    image: "/images/delipucash.png",
    category: "mobile",
    stack: ["React Native", "TypeScript", "Fintech", "Stripe"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "taskapp",
    title: "TaskApp",
    summary:
      "Kotlin Android app for productivity tracking with real-time Firebase sync and smart reminders.",
    image: "/images/task.jpg",
    category: "mobile",
    stack: ["Kotlin", "Android", "Firebase"],
    status: "shipped",
    featured: false,
  },
  {
    slug: "blog-design",
    title: "Malinga Gerald Blog",
    summary:
      "Custom WordPress blog build with SEO optimisation, responsive design, and performance tuning.",
    image: "/images/blog.png",
    category: "web",
    stack: ["WordPress", "PHP", "SEO"],
    liveUrl: "https://malingageraldspongeman.com",
    status: "shipped",
    featured: false,
  },
  {
    slug: "this-portfolio",
    title: "This Portfolio",
    summary:
      "Next.js 16 App Router · React 19 · glassmorphism · MDX case studies · motion · MCP-ready.",
    image: "/images/carreer.jpg",
    category: "web",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "motion", "MDX"],
    liveUrl: "https://mpairweportfolio.vercel.app",
    repoUrl: "https://github.com/mpairweLandwind",
    status: "shipped",
    featured: false,
  },
]

export const projectTabs: ProjectTab[] = [
  { value: "all", label: "All" },
  { value: "agentic", label: "Agentic" },
  { value: "devsecops", label: "DevSecOps" },
  { value: "mlops", label: "MLOps" },
  { value: "cloud", label: "Cloud" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "iot", label: "IoT" },
]

export const flagshipSlugs = projects
  .filter((p) => p.featured)
  .map((p) => p.caseStudySlug!)
  .filter(Boolean)
