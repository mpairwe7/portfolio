#!/usr/bin/env node
/**
 * Generate public/mpairwe-lauben-resume.pdf from /resume (source of truth).
 *
 * Flow:
 *   1. Spawn `next start` on port 3030 (uses existing .next build)
 *      Falls back to `next dev` if no build is found.
 *   2. Poll http://localhost:3030/resume until it returns 200.
 *   3. Run headless Chrome with --print-to-pdf on /resume?print=1.
 *   4. Tear the server down.
 *
 * Run: `bun run resume:pdf`
 *
 * Requires: google-chrome or chromium in PATH.
 */

import { spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { setTimeout as sleep } from "node:timers/promises"

const PORT = 3030
const URL = `http://localhost:${PORT}/resume`
const OUTPUT = resolve("public/mpairwe-lauben-resume.pdf")
const CHROME_BIN =
  process.env.CHROME_BIN ??
  ["google-chrome", "chromium", "chromium-browser", "chrome"].find((bin) => {
    try {
      const r = spawn("which", [bin])
      return true
    } catch {
      return false
    }
  }) ??
  "google-chrome"

const haveBuild = existsSync(resolve(".next/BUILD_ID"))
const mode = haveBuild ? "start" : "dev"

async function waitFor(url, { tries = 60, every = 500 } = {}) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url)
      if (res.status === 200) return
    } catch {}
    await sleep(every)
  }
  throw new Error(`Timed out waiting for ${url}`)
}

async function main() {
  await mkdir(dirname(OUTPUT), { recursive: true })

  console.log(`[resume-pdf] Starting next ${mode} on :${PORT}`)
  const server = spawn("bunx", ["--bun", "next", mode, "--port", String(PORT)], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  })
  server.stdout.on("data", (d) => process.stdout.write(`[next] ${d}`))
  server.stderr.on("data", (d) => process.stderr.write(`[next!] ${d}`))

  try {
    await waitFor(URL, { tries: 120, every: 500 })
    console.log(`[resume-pdf] /resume responding; printing to ${OUTPUT}`)

    const chromeArgs = [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--hide-scrollbars",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=5000",
      "--no-pdf-header-footer",
      `--print-to-pdf=${OUTPUT}`,
      URL,
    ]

    await new Promise((resolveRun, reject) => {
      const chrome = spawn(CHROME_BIN, chromeArgs, { stdio: "inherit" })
      chrome.on("exit", (code) =>
        code === 0
          ? resolveRun()
          : reject(new Error(`${CHROME_BIN} exited with ${code}`))
      )
      chrome.on("error", reject)
    })

    console.log(`[resume-pdf] ✓ PDF written to ${OUTPUT}`)
  } finally {
    server.kill("SIGTERM")
    await sleep(500)
    if (!server.killed) server.kill("SIGKILL")
  }
}

main().catch((err) => {
  console.error("[resume-pdf] failed:", err.message)
  process.exit(1)
})
