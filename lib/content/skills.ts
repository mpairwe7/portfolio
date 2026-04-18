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

export const skillBars: SkillBar[] = [
  { skill: "CI/CD Pipelines & GitHub Actions", pct: 92 },
  { skill: "Cloud & DevOps (AWS / Azure / GCP, Terraform, K8s)", pct: 90 },
  { skill: "Java & Spring Boot / Kotlin", pct: 90 },
  { skill: "Python (ML, Data Science, FastAPI)", pct: 88 },
  { skill: "JavaScript / TypeScript (React, Next.js)", pct: 85 },
  { skill: "Machine Learning & Data Science", pct: 85 },
  { skill: "Flutter & React Native (Mobile)", pct: 82 },
  { skill: "Databases (MySQL, PostgreSQL, MongoDB, Firebase)", pct: 80 },
  { skill: "IoT Development (Arduino, Raspberry Pi)", pct: 80 },
  { skill: "Node.js / Express / Prisma", pct: 78 },
]

export const domainSkills: DomainSkill[] = [
  { skill: "Cloud Computing", icon: Cloud },
  { skill: "DevOps & CI/CD", icon: Code },
  { skill: "AI / ML", icon: BarChart },
  { skill: "IoT Development", icon: Cpu },
  { skill: "Web Development", icon: Globe },
  { skill: "Mobile (Flutter, RN)", icon: Smartphone },
  { skill: "Database Design", icon: Database },
  { skill: "Team Leadership", icon: Award },
]

export const domainCards: DomainCard[] = [
  {
    iconKey: "cloud",
    iconTint: "text-blue-500",
    iconBg: "bg-blue-500/10",
    borderColor: "border-t-blue-500",
    title: "Cloud & DevOps",
    desc: "Expert in designing and maintaining scalable, secure cloud infrastructure and CI/CD pipelines.",
    tags: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "GitHub Actions"],
  },
  {
    iconKey: "brain",
    iconTint: "text-purple-500",
    iconBg: "bg-purple-500/10",
    borderColor: "border-t-purple-500",
    title: "AI / Machine Learning",
    desc: "Experienced in building end-to-end ML pipelines, training models, and deploying AI solutions.",
    tags: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "NLP"],
  },
  {
    iconKey: "phone",
    iconTint: "text-green-500",
    iconBg: "bg-green-500/10",
    borderColor: "border-t-green-500",
    title: "Mobile & Web",
    desc: "Full-stack developer with strong mobile expertise across Android, iOS, and cross-platform frameworks.",
    tags: ["Flutter", "React Native", "Kotlin", "Swift", "React", "Next.js", "Spring Boot"],
  },
]
