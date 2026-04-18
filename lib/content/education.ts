import type { EducationEntry } from "./types"

export const education: EducationEntry[] = [
  {
    school: "Makerere University",
    degree: "Bachelor of Science in Software Engineering",
    period: "2024 – Expected 2027",
    cgpa: "4.31",
    borderColor: "border-l-primary",
    highlights: [
      "Specialising in AI/ML and Enterprise Application Development",
      "Integrated Supabase, MongoDB, Cloudflare, and Firebase for scalable storage",
      "Implemented RBAC and encryption for secure multi-role systems",
      "Built a full HRMS system with advanced role and permissions management",
      "Worked on IoT and Embedded Systems research projects",
      "Optimised PostgreSQL queries for high-performance data retrieval",
    ],
  },
  {
    school: "Makerere University",
    degree: "Bachelor of Science in Computer Engineering",
    period: "2019 – 2023",
    cgpa: "",
    borderColor: "border-l-blue-500",
    highlights: [
      "Transitioned to the Software Engineering programme",
      "Studied Digital Electronics and hardware design principles",
      "Hardware repair, maintenance, and systems diagnostics",
    ],
  },
  {
    school: "Uganda Technical College – Lira",
    degree: "National Diploma in Information Communication Technology",
    period: "2016 – 2018",
    cgpa: "4.77",
    borderColor: "border-l-green-500",
    highlights: [
      "Database Management and Web Development",
      "Internet technologies and networking fundamentals",
      "RBAC and Encryption implementation",
      "Java programming and object-oriented design",
      "Networking and Server Configuration",
    ],
  },
  {
    school: "Boston High School – Mpala",
    degree: "Uganda Certificate of Education (UCE)",
    period: "2011 – 2015",
    cgpa: "",
    borderColor: "border-l-orange-500",
    highlights: ["Graduated in Top 5% of class", "Varsity Debate Team Captain"],
  },
]
