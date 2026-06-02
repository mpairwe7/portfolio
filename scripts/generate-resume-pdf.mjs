#!/usr/bin/env node
/**
 * Generate public/mpairwe-lauben-resume.pdf from /resume (source of truth).
 *
 * Flow:
 *   1. Spawn `next start` on port 3030 (uses existing .next build)
 *      Falls back to `next dev` if no build is found.
 *   2. Poll http://localhost:3030/resume until it returns 200.
 *   3. Render to PDF with whichever engine is available:
 *        - headless Chrome / Chromium (--print-to-pdf), preferred; else
 *        - WeasyPrint (`weasyprint <url> <out>`), a pure-Python HTML→PDF engine.
 *      Override with PDF_ENGINE=chrome|weasyprint, or CHROME_BIN=<path>.
 *   4. Tear the server down.
 *
 * Run: `npm run resume:pdf`
 *
 * Requires: google-chrome/chromium in PATH, OR weasyprint (`pip install weasyprint`).
 */

import { spawn, spawnSync } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { setTimeout as sleep } from "node:timers/promises"

const PORT = 3030
const URL = `http://localhost:${PORT}/resume`
const OUTPUT = resolve("public/mpairwe-lauben-resume.pdf")

/** Return the absolute path of the first binary found in PATH, or null. */
function which(bin) {
  const r = spawnSync("which", [bin], { encoding: "utf8" })
  return r.status === 0 ? r.stdout.trim() : null
}

function resolveEngine() {
  const forced = process.env.PDF_ENGINE
  const chromeBin =
    process.env.CHROME_BIN ??
    ["google-chrome", "chromium", "chromium-browser", "chrome"]
      .map(which)
      .find(Boolean)
  const weasy = which("weasyprint")

  if (forced === "chrome") return { engine: "chrome", bin: chromeBin }
  if (forced === "weasyprint") return { engine: "weasyprint", bin: weasy }
  if (chromeBin) return { engine: "chrome", bin: chromeBin }
  if (weasy) return { engine: "weasyprint", bin: weasy }
  return { engine: null, bin: null }
}

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

function run(bin, args) {
  return new Promise((res, reject) => {
    const child = spawn(bin, args, { stdio: "inherit" })
    child.on("exit", (code) =>
      code === 0 ? res() : reject(new Error(`${bin} exited with ${code}`))
    )
    child.on("error", reject)
  })
}

async function printPdf({ engine, bin }) {
  if (engine === "chrome") {
    console.log(`[resume-pdf] engine: chrome (${bin})`)
    return run(bin, [
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
    ])
  }
  if (engine === "weasyprint") {
    console.log(`[resume-pdf] engine: weasyprint (${bin})`)
    return run(bin, ["--media-type", "print", URL, OUTPUT])
  }
  throw new Error(
    "No PDF engine found. Install google-chrome/chromium, or run `pip install weasyprint`."
  )
}

async function main() {
  const engine = resolveEngine()
  if (!engine.engine) {
    throw new Error(
      "No PDF engine found. Install google-chrome/chromium, or run `pip install weasyprint`."
    )
  }

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
    await printPdf(engine)
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
