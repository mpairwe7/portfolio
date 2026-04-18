import type React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import { NoiseLayer } from "@/components/bg/noise-layer"
import { CommandPalette } from "@/components/command/command-palette"
import { ShortcutOverlay } from "@/components/command/shortcut-overlay"
import { Toaster } from "sonner"
import { profile } from "@/lib/content/profile"
import { ionatec } from "@/lib/content/ionatec"

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mpairwe.dev"

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.fullName} · DevSecOps · ML · Agentic AI Engineer`,
    template: `%s · ${profile.fullName}`,
  },
  description:
    "DevSecOps engineer at AIBOS Uganda, co-founder of Ionatec (Iona Institute of Technology), and applied ML / agentic AI practitioner shipping production systems from Kampala.",
  keywords: [
    "Mpairwe Lauben",
    "DevSecOps Engineer",
    "ML Engineer",
    "Agentic AI Engineer",
    "LLM Agents",
    "MCP Server",
    "Claude Agent SDK",
    "LangGraph",
    "Ionatec",
    "Iona Institute of Technology",
    "AIBOS Uganda",
    "Kampala",
    "Kubernetes Security",
    "Supply Chain Security",
    "SLSA Sigstore",
    "RAG pipelines",
    "Vector databases",
    "Terraform",
    "Vercel",
  ],
  authors: [{ name: profile.fullName, url: SITE_URL }],
  creator: profile.fullName,
  openGraph: {
    title: `${profile.fullName} · DevSecOps · ML · Agentic AI Engineer`,
    description:
      "DevSecOps @ AIBOS · Co-founder @ Ionatec · Applied ML & agentic AI · Kampala, Uganda.",
    url: SITE_URL,
    siteName: `${profile.fullName} — Portfolio`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} · DevSecOps · ML · Agentic AI`,
    description:
      "DevSecOps @ AIBOS · Co-founder @ Ionatec · Kampala.",
    creator: "@mpairwelauben",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: SITE_URL,
  image: `${SITE_URL}/images/lauben.jpg`,
  jobTitle: "DevSecOps Engineer · ML Engineer · Agentic AI Engineer",
  worksFor: [
    {
      "@type": "Organization",
      name: "AIBOS Uganda",
    },
    {
      "@type": "Organization",
      name: ionatec.name,
      url: ionatec.url,
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  email: `mailto:${profile.email}`,
  sameAs: [
    profile.linkedinUrl,
    profile.githubUrl,
    profile.twitterUrl,
    ionatec.url,
  ],
  knowsAbout: [
    "DevSecOps",
    "Cloud Security",
    "Supply Chain Security",
    "Machine Learning",
    "LLM Agents",
    "Model Context Protocol",
    "Retrieval-Augmented Generation",
    "Kubernetes",
    "Terraform",
  ],
}

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ionatec.name,
  alternateName: ionatec.shortName,
  url: ionatec.url,
  description: ionatec.mission,
  founder: {
    "@type": "Person",
    name: profile.fullName,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "UG",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CommandPalette />
          <ShortcutOverlay />
          <NoiseLayer />
          <Toaster richColors position="top-right" closeButton theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  )
}
