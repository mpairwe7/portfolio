import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import type { SocialLink, ContactLink } from "./types"
import { profile } from "./profile"

export const socialLinks: SocialLink[] = [
  { href: profile.twitterUrl, icon: Twitter, label: "Twitter / X" },
  { href: profile.githubUrl, icon: Github, label: "GitHub" },
  { href: profile.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Send email" },
]

export const contactLinks: ContactLink[] = [
  {
    iconKey: "mail",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    iconKey: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneTel}`,
  },
  {
    iconKey: "map",
    label: "Location",
    value: profile.location,
    href: null,
  },
  {
    iconKey: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedinUrl,
  },
  {
    iconKey: "github",
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.githubUrl,
  },
]

export const contactAboutFields = [
  { label: "Name", value: profile.fullName },
  { label: "DOB", value: profile.dob },
  { label: "Email", value: profile.email },
  { label: "Phone", value: profile.phone },
  { label: "Location", value: profile.location },
  { label: "Nationality", value: profile.nationality },
] as const
