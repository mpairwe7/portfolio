"use server"

import "server-only"
import { headers } from "next/headers"
import { Resend } from "resend"
import { contactSchema, type ContactFormValues } from "@/lib/content/contact"
import { checkRateLimit } from "@/lib/rate-limit"
import { profile } from "@/lib/content/profile"

export type SendContactResult =
  | { ok: true }
  | { ok: false; error: string; retryAfter?: number }

async function verifyTurnstile(token: string | undefined) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // feature not configured
  if (!token) return false
  try {
    const body = new URLSearchParams({ secret, response: token })
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body }
    )
    const data = (await res.json()) as { success: boolean }
    return data.success === true
  } catch {
    return false
  }
}

async function getClientIp() {
  const h = await headers()
  const forwarded = h.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  const real = h.get("x-real-ip")
  if (real) return real.trim()
  return "unknown"
}

export async function sendContact(
  values: ContactFormValues & { website?: string; turnstileToken?: string }
): Promise<SendContactResult> {
  // 1. Honeypot — bots fill hidden fields; real users don't. Fail silently.
  if (values.website && values.website.length > 0) {
    return { ok: true }
  }

  // 2. Zod re-validate (client already validated but the client is untrusted)
  const parsed = contactSchema.safeParse(values)
  if (!parsed.success) {
    return {
      ok: false,
      error:
        parsed.error.issues[0]?.message ?? "Please check the form fields.",
    }
  }

  // 3. Turnstile (only if configured)
  const turnstileOk = await verifyTurnstile(values.turnstileToken)
  if (!turnstileOk) {
    return { ok: false, error: "Bot check failed. Please refresh and retry." }
  }

  // 4. Rate limit by IP
  const ip = await getClientIp()
  const rate = checkRateLimit(`contact:${ip}`)
  if (!rate.allowed) {
    const minutes = Math.max(
      1,
      Math.round((rate.resetAt - Date.now()) / 60000)
    )
    return {
      ok: false,
      error: `Too many messages. Try again in about ${minutes} min.`,
      retryAfter: rate.resetAt,
    }
  }

  // 5. Resend — if not configured, return a friendly error so the form is
  //    visibly broken rather than silently swallowing submissions.
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL ?? profile.email

  if (!apiKey || !fromEmail) {
    return {
      ok: false,
      error:
        "Email service is not yet configured. Please reach out via the links in the contact section.",
    }
  }

  try {
    const resend = new Resend(apiKey)
    const safe = parsed.data
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: safe.email,
      subject: `Portfolio: ${safe.subject}`,
      text: [
        `From: ${safe.name} <${safe.email}>`,
        `IP: ${ip}`,
        "",
        safe.message,
      ].join("\n"),
    })
    return { ok: true }
  } catch {
    return {
      ok: false,
      error:
        "Something went wrong sending the message. Please email directly instead.",
    }
  }
}
