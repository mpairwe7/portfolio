import type React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { NoiseLayer } from "@/components/bg/noise-layer"
import { Toaster } from "sonner"

export const metadata = {
  title: "Mpairwe Lauben | DevOps & Software Engineer",
  description:
    "Portfolio of Mpairwe Lauben — DevOps Engineer, AI/ML Engineer, and Full Stack Developer based in Kampala, Uganda. Specialising in cloud infrastructure, machine learning, mobile, and web development.",
  keywords: [
    "Mpairwe Lauben",
    "DevOps Engineer Uganda",
    "Software Engineer Kampala",
    "AI ML Engineer",
    "Full Stack Developer",
    "Open Source and Enterprise FrameWork Developer",
    "Flutter Developer",
    "React Native Developer",
    "Spring Boot",
    "Kubernetes",
    "Terraform",
  ],
  authors: [{ name: "Mpairwe Lauben", url: "https://mpairweportfolio.vercel.app" }],
  openGraph: {
    title: "Mpairwe Lauben | DevOps & Software Engineer",
    description:
      "DevOps, Enterprise, AI/ML, Full Stack & Mobile Engineer based in Kampala, Uganda.",
    url: "https://mpairweportfolio.vercel.app",
    siteName: "Mpairwe Lauben Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <NoiseLayer />
          <Toaster richColors position="top-right" closeButton theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  )
}
