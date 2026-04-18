import type { Project, ProjectTab } from "./types"

export const projects: Project[] = [
  {
    title: "AWS Serverless E-commerce Platform",
    description:
      "Scalable e-commerce platform built with AWS Lambda, API Gateway, DynamoDB, and S3 for high availability and performance.",
    image: "/images/awsserveless.webp",
    tags: ["AWS", "Serverless", "DynamoDB", "Lambda", "API Gateway"],
    categories: ["cloud"],
  },
  {
    title: "Cloud Healthcare Management System",
    description:
      "HIPAA-compliant healthcare system deployed on AWS using EC2, RDS, and Cognito for secure authentication.",
    image: "/images/awsheath.webp",
    tags: ["AWS", "EC2", "RDS", "Cognito", "Security"],
    categories: ["cloud"],
  },
  {
    title: "Smart Home Automation System",
    description:
      "IoT-based home automation using Raspberry Pi, Arduino, and AWS IoT Core for remote monitoring and control.",
    image: "/images/securityauto.webp",
    tags: ["IoT", "AWS IoT", "Raspberry Pi", "Arduino", "MQTT"],
    categories: ["iot"],
  },
  {
    title: "Agricultural Monitoring System",
    description:
      "IoT solution monitoring soil moisture, temperature, and humidity with real-time alerts and data visualisation.",
    image: "/images/openart-image_MH5vlRff_1744475821625_raw.jpg",
    tags: ["IoT", "Sensors", "Data Visualisation", "AWS"],
    categories: ["iot"],
  },
  {
    title: "Predictive Maintenance ML Model",
    description:
      "Machine learning model that predicts equipment failures before they occur, reducing downtime and maintenance costs.",
    image: "/images/predictive maintenance.webp",
    tags: ["Machine Learning", "Python", "TensorFlow", "scikit-learn"],
    categories: ["ml"],
  },
  {
    title: "Customer Sentiment Analysis",
    description:
      "NLP-based sentiment analysis tool processing customer feedback and social media to gauge brand perception.",
    image: "/images/sentimentanalysisz.webp",
    tags: ["NLP", "Machine Learning", "Python", "AWS Comprehend"],
    categories: ["ml"],
  },
  {
    title: "Zaloni Dental Management System",
    description:
      "C#/VB.NET desktop system streamlining inventory, sales, and patient management for Zaloni Dental.",
    image: "/images/zaloni.png",
    tags: ["C#", "VB.NET", "Desktop", "Inventory Management"],
    categories: ["desktop"],
  },
  {
    title: "Zaloni Dental Hub",
    description:
      "Flutter mobile app providing seamless access to dental services, online appointments, and resource booking.",
    image: "/images/zaloni_icon.png",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    categories: ["mobile"],
  },
  {
    title: "Delipucash Mobile App",
    description:
      "React Native fintech app enabling fast, secure digital transactions for individuals and businesses.",
    image: "/images/delipucash.png",
    tags: ["React Native", "Fintech", "TypeScript", "Mobile"],
    categories: ["mobile"],
  },
  {
    title: "Task Management App",
    description:
      "Kotlin Android app for productivity tracking with real-time Firebase sync and smart reminders.",
    image: "/images/task.jpg",
    tags: ["Kotlin", "Android", "Firebase", "Real-time"],
    categories: ["mobile"],
  },
  {
    title: "Blog Design",
    description:
      "Designed and built the WordPress blog malingageraldspongeman.com with SEO optimisation and responsive design.",
    image: "/images/blog.png",
    tags: ["WordPress", "Web Design", "SEO", "PHP"],
    categories: ["web"],
    link: "https://malingageraldspongeman.com",
  },
  {
    title: "My Portfolio",
    description:
      "This portfolio — a Next.js 15 SPA with dark mode, scroll animations, and a validated contact form.",
    image: "/images/carreer.jpg",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    categories: ["web"],
    link: "https://mpairweportfolio.vercel.app",
    github: "https://github.com/mpairweLandwind",
  },
]

export const projectTabs: ProjectTab[] = [
  { value: "all", label: "All Projects" },
  { value: "cloud", label: "Cloud" },
  { value: "iot", label: "IoT" },
  { value: "ml", label: "ML / AI" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
  { value: "desktop", label: "Desktop" },
]
