/**
 * Certifications
 *
 * Only add certifications that are actually earned. Entries marked `planned`
 * render as "studying for" so reviewers see the trajectory without a claim
 * of completion. USER: replace placeholder entries as certifications are
 * earned or trimmed.
 */

export type CertificationStatus = "earned" | "planned" | "expired"

export type Certification = {
  name: string
  issuer: string
  status: CertificationStatus
  year?: string
  url?: string
  code?: string
}

export const certifications: Certification[] = [
  // USER: replace placeholders below with actual earned certs.
  {
    name: "AWS Certified DevOps Engineer · Professional",
    issuer: "Amazon Web Services",
    status: "planned",
    code: "DOP-C02",
  },
  {
    name: "Certified Kubernetes Security Specialist",
    issuer: "CNCF",
    status: "planned",
    code: "CKS",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    status: "planned",
    code: "CKA",
  },
  {
    name: "HashiCorp Certified · Terraform Associate",
    issuer: "HashiCorp",
    status: "planned",
    code: "003",
  },
  {
    name: "AWS Solutions Architect · Associate",
    issuer: "Amazon Web Services",
    status: "planned",
    code: "SAA-C03",
  },
  {
    name: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    status: "planned",
  },
]
