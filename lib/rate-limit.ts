/**
 * Simple in-memory sliding-window rate limiter.
 *
 * Good enough for a portfolio contact form. When traffic warrants it (and
 * Vercel Fluid Compute keeps warm instances), upgrade to Vercel KV or an
 * external Redis. The API is identical.
 *
 * Note: on Fluid Compute, state is shared across concurrent requests on the
 * same instance but not across instances. For a personal portfolio with low
 * volume this is acceptable — worst case a persistent spammer hits the
 * limit twice before both instances agree.
 */

type Bucket = { windowStart: number; count: number }

const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const LIMIT = 5

const buckets = new Map<string, Bucket>()

export type RateLimitResult = {
  allowed: boolean
  remaining: number
  resetAt: number
}

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    buckets.set(key, { windowStart: now, count: 1 })
    return { allowed: true, remaining: LIMIT - 1, resetAt: now + WINDOW_MS }
  }

  if (bucket.count >= LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: bucket.windowStart + WINDOW_MS,
    }
  }

  bucket.count += 1
  return {
    allowed: true,
    remaining: LIMIT - bucket.count,
    resetAt: bucket.windowStart + WINDOW_MS,
  }
}

// Periodic cleanup — avoid unbounded memory growth
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now()
    for (const [key, bucket] of buckets) {
      if (now - bucket.windowStart > WINDOW_MS) {
        buckets.delete(key)
      }
    }
  }, WINDOW_MS).unref?.()
}
