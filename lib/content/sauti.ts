/**
 * Sauti Health — engineering partnership.
 *
 * Pre-hospital emergency dispatch for sub-Saharan Africa: USSD-first,
 * offline-capable, mobile-money native. I contribute as an engineering
 * partner across backend, dispatch, and observability.
 *
 * Source: https://sautihealth.com (mission, model, and stack hints).
 */

export const sauti = {
  name: "Sauti Health",
  shortName: "Sauti",
  url: "https://sautihealth.com",
  role: "Developer · Engineering Partner",
  tagline:
    "Coordinated emergency response for every person in sub-Saharan Africa — no matter the network, device, or income.",
  mission:
    "Sauti Health runs a pre-hospital emergency dispatch platform for low-resource settings: USSD on basic 2G phones, offline-capable responder apps, mobile-money payments, and an analytics layer that tunes dispatch with reinforcement learning. It turns existing community infrastructure — health workers and motorcycle riders — into a fast, affordable response network.",
  contribution:
    "I partner with the Sauti Health team as a developer across backend services, dispatch and payment integrations, offline-first patterns, and platform observability — making the system run reliably across patchy networks and constrained devices.",
  focus: [
    "Dispatch backend and API services",
    "Offline-first responder workflows on low-end Android",
    "Mobile-money (MTN MoMo · Airtel Money) payment flows",
    "Telemetry, dashboards, and CI gates for safety-critical paths",
  ],
  stack: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "USSD / IVR",
    "PyMC",
    "Streamlit",
    "DHIS2",
    "Mobile Money APIs",
  ],
  status: "Active partnership · Kampala",
  partnerLine:
    "Working with Sauti Health on the engineering that turns community responders into a coordinated emergency network.",
} as const
