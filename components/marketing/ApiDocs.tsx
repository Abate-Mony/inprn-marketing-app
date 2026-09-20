"use client";

import { useEffect, useRef, useState } from "react";

// ─── Content ────────────────────────────────────────────────────────────────
// Mirrors time_sheet_server/EXTERNAL_API.md — keep both in sync when the API
// changes. This page is the human-readable, browsable version; that file is
// the canonical source integrators can also read straight from the repo.

const NAV = [
  {
    label: "Guide",
    items: [
      { id: "overview", label: "Overview" },
      { id: "auth", label: "Authentication" },
      { id: "basics", label: "Base URL & limits" },
    ],
  },
  {
    label: "Endpoints",
    items: [
      { id: "clients", label: "Clients", method: "GET" as const },
      { id: "sites", label: "Sites", method: "GET" as const },
      { id: "schedule", label: "Schedule", method: "GET" as const },
      { id: "jobs", label: "Jobs", method: "POST" as const },
    ],
  },
  {
    label: "Reference",
    items: [
      { id: "errors", label: "Errors" },
      { id: "example", label: "Axios example" },
      { id: "flow", label: "Integration flow" },
    ],
  },
];

function Method({ value }: { value: "GET" | "POST" }) {
  const isGet = value === "GET";
  return (
    <span
      className={`font-mono text-[10px] font-bold px-1.5 py-[1px] rounded ${
        isGet ? "text-emerald-700 bg-emerald-50" : "text-orange-700 bg-orange-50"
      }`}
    >
      {value}
    </span>
  );
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      })
      .catch(() => {});
  };
  return (
    <div className="rounded-xl overflow-hidden bg-[#0B1220] border border-white/5 my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/8">
        <span className="font-mono text-[11px] text-white/40">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="text-[11px] text-white/70 bg-white/8 hover:bg-white/14 rounded-md px-2 py-1 transition-colors"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="px-4 py-3.5 overflow-x-auto text-[12.5px] leading-relaxed text-white/85">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function ParamsTable({
  rows,
}: {
  rows: { name: string; required: boolean; note: React.ReactNode }[];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left">
            <th className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 pb-2 pr-3">Field</th>
            <th className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 pb-2 pr-3">Required</th>
            <th className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 pb-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-slate-100">
              <td className="py-2.5 pr-3 font-mono text-[12.5px] text-slate-800 whitespace-nowrap align-top">{r.name}</td>
              <td className="py-2.5 pr-3 align-top">
                <span
                  className={`text-[11px] font-semibold ${r.required ? "text-[#1E3A5F]" : "text-slate-400"}`}
                >
                  {r.required ? "required" : "optional"}
                </span>
              </td>
              <td className="py-2.5 text-slate-500 leading-relaxed align-top">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EndpointHeading({ method, path }: { method: "GET" | "POST"; path: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <span
        className={`font-mono text-[12px] font-bold px-2 py-0.5 rounded-md ${
          method === "GET" ? "text-emerald-700 bg-emerald-50" : "text-orange-700 bg-orange-50"
        }`}
      >
        {method}
      </span>
      <span className="font-mono text-[13.5px] text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">{path}</span>
    </div>
  );
}

export function ApiDocs() {
  const [activeId, setActiveId] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const ids = NAV.flatMap((g) => g.items.map((i) => i.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Title band */}
      <section className="pt-28 pb-12 bg-[#080F1C]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-4">Developer docs</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">External API</h1>
          <p className="text-white/45 leading-relaxed max-w-xl mx-auto">
            Connect your own systems — a booking website, a Zapier flow, an internal tool — to your INPRN schedule.
            Authenticated by an API key, scoped to your company automatically.
          </p>
        </div>
      </section>

      <div className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <button
            type="button"
            onClick={() => setMobileNavOpen((v) => !v)}
            className="lg:hidden w-full flex items-center justify-between py-3 text-sm font-medium text-slate-700"
          >
            On this page
            <span className="text-slate-400">{mobileNavOpen ? "−" : "+"}</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-12">
        {/* Sidebar */}
        <nav className={`${mobileNavOpen ? "block" : "hidden"} lg:block lg:sticky lg:top-[90px] lg:self-start lg:max-h-[calc(100vh-110px)] lg:overflow-y-auto`}>
          {NAV.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2 px-2">{group.label}</p>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileNavOpen(false)}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${
                      activeId === item.id ? "bg-[#1E3A5F]/8 text-[#1E3A5F] font-medium" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {"method" in item && <Method value={item.method} />}
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Main content */}
        <main className="min-w-0">
          {/* Safety callout */}
          <div className="border border-slate-200 border-l-[3px] border-l-[#1E3A5F] bg-slate-50 rounded-r-xl px-5 py-4 mb-10 text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Safety rule that applies to every write this API can do:</strong> a job
            created through this API always comes in as a <code className="font-mono text-[12.5px]">draft</code>. It&apos;s
            never published, never assigned a worker, and never visible in a worker&apos;s app until a manager reviews and
            publishes it inside INPRN.
          </div>

          <section id="overview" className="scroll-mt-24 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Getting a key</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              In the INPRN app: <strong className="text-slate-900">Settings → API Keys → New key.</strong> Only the
              company owner can create or revoke keys. The raw key is shown exactly once, right after creation — copy it
              somewhere safe immediately. INPRN only ever stores a hash of it, so if you lose it, the only fix is to
              revoke it and create a new one.
            </p>
          </section>

          <section id="auth" className="scroll-mt-24 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Authentication</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">Every request needs the key as a bearer token.</p>
            <CodeBlock label="Header">{`Authorization: Bearer ipk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`}</CodeBlock>
            <p className="text-slate-500 text-sm leading-relaxed">
              Missing or invalid key → <code className="font-mono text-[12px]">401</code>. Revoked key →{" "}
              <code className="font-mono text-[12px]">401</code> (same response — it doesn&apos;t distinguish
              &quot;never existed&quot; from &quot;revoked&quot;).
            </p>
          </section>

          <section id="basics" className="scroll-mt-24 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Base URL &amp; rate limit</h2>
            <CodeBlock label="Base URL">{`https://<your-inprn-api-host>/api/v1/external`}</CodeBlock>
            <p className="text-slate-500 text-sm leading-relaxed">
              <strong className="text-slate-700">300 requests</strong> per 15 minutes, per key. Beyond that you&apos;ll
              get a <code className="font-mono text-[12px]">429</code>.
            </p>
          </section>

          <section id="clients" className="scroll-mt-24 mb-12">
            <EndpointHeading method="GET" path="/clients" />
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">
              Look up your clients by name so you can resolve a name you already know to the id the rest of this API
              needs. Only active clients are returned.
            </p>
            <ParamsTable
              rows={[
                { name: "search", required: false, note: "Case-insensitive, matches anywhere in the client name. Omit to list all (capped at 100)." },
              ]}
            />
            <CodeBlock label="200 · application/json">{`{
  "success": true,
  "clients": [
    { "id": "66f1a2b3c4d5e6f7a8b9c0d1", "name": "Acme Security Ltd" }
  ]
}`}</CodeBlock>
          </section>

          <section id="sites" className="scroll-mt-24 mb-12">
            <EndpointHeading method="GET" path="/sites" />
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">A client&apos;s saved locations, if they have any set up in INPRN.</p>
            <ParamsTable rows={[{ name: "clientId", required: true, note: "A real, active client id from /clients." }]} />
            <CodeBlock label="200 · application/json">{`{
  "success": true,
  "sites": [
    { "id": "66f1a2b3c4d5e6f7a8b9c0d2", "name": "Warehouse — Bristol" }
  ]
}`}</CodeBlock>
          </section>

          <section id="schedule" className="scroll-mt-24 mb-12">
            <EndpointHeading method="GET" path="/schedule" />
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">
              Read jobs — this is the calendar/schedule read side. Capped at 500 jobs per call; page with{" "}
              <code className="font-mono text-[12.5px]">dateFrom</code>/<code className="font-mono text-[12.5px]">dateTo</code> if you need more.
            </p>
            <ParamsTable
              rows={[
                { name: "dateFrom", required: false, note: "YYYY-MM-DD, inclusive." },
                { name: "dateTo", required: false, note: "YYYY-MM-DD, inclusive." },
                { name: "status", required: false, note: "One of draft, published, completed, cancelled." },
                { name: "clientId", required: false, note: "Filter to one client." },
              ]}
            />
            <CodeBlock label="200 · application/json">{`{
  "success": true,
  "jobs": [
    {
      "id": "66f2b3c4d5e6f7a8b9c0d1e2",
      "title": "Night Shift — Warehouse",
      "date": "2026-10-15",
      "startTime": "20:00",
      "endTime": "06:00",
      "status": "published",
      "client": "Acme Security Ltd",
      "site": "Warehouse — Bristol",
      "requiredWorkers": 3,
      "assignedWorkers": 1,
      "externalReference": null
    }
  ]
}`}</CodeBlock>
            <p className="text-slate-500 text-sm leading-relaxed">
              <code className="font-mono text-[12px]">externalReference</code> echoes back whatever you sent when
              creating the job via this API — <code className="font-mono text-[12px]">null</code> for jobs created
              inside INPRN itself. This endpoint never returns worker names, contact details, or pay rates.
            </p>
          </section>

          <section id="jobs" className="scroll-mt-24 mb-12">
            <EndpointHeading method="POST" path="/jobs" />
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">
              Request a new shift. <strong className="text-slate-900">Always creates a draft</strong> — see the safety
              note above.
            </p>
            <CodeBlock label="Request body">{`{
  "clientId": "66f1a2b3c4d5e6f7a8b9c0d1",
  "siteId": "66f1a2b3c4d5e6f7a8b9c0d2",
  "title": "Night Shift — Warehouse",
  "description": "Security cover for the new stock delivery.",
  "date": "2026-10-15",
  "startTime": "20:00",
  "endTime": "06:00",
  "requiredWorkers": 3,
  "notes": "Gate code changes weekly — check with site manager.",
  "externalReference": "BOOKING-4471"
}`}</CodeBlock>
            <ParamsTable
              rows={[
                { name: "clientId", required: true, note: "A real, active client id from /clients." },
                { name: "siteId", required: false, note: "A real, active site id belonging to that client, from /sites. * see below" },
                { name: "location", required: false, note: "A free-text one-off address, if not using a saved site. * see below" },
                { name: "title", required: true, note: "Shift name/title." },
                { name: "description", required: false, note: "Falls back to title if omitted." },
                { name: "date", required: true, note: "YYYY-MM-DD." },
                { name: "startTime / endTime", required: true, note: "HH:mm, 24-hour. End time at or before start time is treated as overnight." },
                { name: "requiredWorkers", required: false, note: "Defaults to 1. Max 200." },
                { name: "address", required: false, note: "Extra address detail, only used alongside location (ignored if siteId is set)." },
                { name: "notes", required: false, note: "Shown to the manager reviewing the draft." },
                { name: "externalReference", required: false, note: "Your own booking/order id — echoed back on every response." },
              ]}
            />
            <p className="text-slate-500 text-sm leading-relaxed mb-1">
              * Provide either <code className="font-mono text-[12px]">siteId</code> or{" "}
              <code className="font-mono text-[12px]">location</code> — one of the two is required.
            </p>
            <CodeBlock label="200 · application/json">{`{
  "success": true,
  "job": {
    "id": "66f2b3c4d5e6f7a8b9c0d1e2",
    "title": "Night Shift — Warehouse",
    "date": "2026-10-15",
    "startTime": "20:00",
    "endTime": "06:00",
    "status": "draft",
    "externalReference": "BOOKING-4471"
  }
}`}</CodeBlock>
            <p className="text-slate-500 text-sm leading-relaxed">
              <code className="font-mono text-[12px]">status</code> is always{" "}
              <code className="font-mono text-[12px]">&quot;draft&quot;</code> in this response — that&apos;s not a
              bug, it&apos;s the whole point. Poll <code className="font-mono text-[12px]">GET /schedule</code> once
              you need to know a manager has published it.
            </p>
          </section>

          <section id="errors" className="scroll-mt-24 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Error reference</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">
              Every failure has the same shape:{" "}
              <code className="font-mono text-[12.5px]">{`{ "msg": "<human-readable message>" }`}</code>.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 pb-2 pr-3">Status</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 pb-2 pr-3">Message</th>
                    <th className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 pb-2">When</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["401", "Missing or invalid API key.", "No Authorization header, a malformed key, or a revoked/unknown one."],
                    ["400", "A valid clientId is required.", "clientId missing or not a valid id shape."],
                    ["400", "Client not found, inactive, or doesn't belong to this company.", "clientId doesn't resolve to one of your active clients."],
                    ["400", "Site not found, inactive, or doesn't belong to this client.", "siteId doesn't belong to the given clientId, or is inactive."],
                    ["400", "Provide either a siteId or a location for a one-off address.", "Neither was sent."],
                    ["400", "startTime must be HH:mm / endTime must be HH:mm", "Wrong time format."],
                    ["429", "(rate limit response)", "More than 300 requests in 15 minutes on this key."],
                  ].map(([status, msg, when]) => (
                    <tr key={msg} className="border-t border-slate-100 align-top">
                      <td className="py-2.5 pr-3">
                        <span className="font-mono text-[11.5px] font-semibold text-red-700 bg-red-50 px-1.5 py-0.5 rounded">{status}</span>
                      </td>
                      <td className="py-2.5 pr-3 font-mono text-[12px] text-slate-800 whitespace-nowrap">{msg}</td>
                      <td className="py-2.5 text-slate-500 leading-relaxed">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="example" className="scroll-mt-24 mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Example client — Node.js / axios</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mb-1">
              The key only ever needs to go in the <code className="font-mono text-[12.5px]">Authorization</code> header
              — set it once on an axios instance and every call inherits it.
            </p>
            <CodeBlock label="inprn-client.js">{`import axios from "axios";

const inprn = axios.create({
  baseURL: "https://<your-inprn-api-host>/api/v1/external",
  headers: {
    Authorization: \`Bearer \${process.env.INPRN_API_KEY}\`,
  },
});

// GET /clients?search=
export async function findClient(name) {
  const { data } = await inprn.get("/clients", { params: { search: name } });
  return data.clients[0] ?? null;
}

// GET /sites?clientId=
export async function getSitesForClient(clientId) {
  const { data } = await inprn.get("/sites", { params: { clientId } });
  return data.sites;
}

// GET /schedule?dateFrom=&dateTo=
export async function getSchedule(dateFrom, dateTo) {
  const { data } = await inprn.get("/schedule", { params: { dateFrom, dateTo } });
  return data.jobs;
}

// POST /jobs — always comes back as status: "draft"
export async function requestBooking(booking) {
  const { data } = await inprn.post("/jobs", {
    clientId: booking.clientId,
    siteId: booking.siteId,
    title: booking.title,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    requiredWorkers: booking.requiredWorkers ?? 1,
    notes: booking.notes,
    externalReference: booking.orderId,
  });
  return data.job;
}`}</CodeBlock>

            <h3 className="text-sm font-bold text-slate-900 mt-6 mb-2">Handling errors</h3>
            <CodeBlock label="error handling">{`try {
  const job = await requestBooking(booking);
} catch (err) {
  if (axios.isAxiosError(err)) {
    console.error(err.response?.status, err.response?.data?.msg);
    // e.g. 400 "Client not found, inactive, or doesn't belong to this company."
  }
  throw err;
}`}</CodeBlock>
          </section>

          <section id="flow" className="scroll-mt-24 mb-4">
            <h2 className="text-xl font-bold text-slate-900 mb-4">A typical integration flow</h2>
            <ol className="flex flex-col gap-4 max-w-2xl">
              {[
                { t: "Resolve your client id.", d: "Call GET /clients?search=<name> once at setup time — or hardcode it if your integration only ever books for one client." },
                { t: "Optionally list saved sites.", d: "GET /sites?clientId=... if you want to let the booker pick a saved site rather than typing an address." },
                { t: "Create the draft.", d: "When a booking comes in on your site, POST /jobs with your own externalReference for reconciliation." },
                { t: "Wait for publish.", d: "A manager reviews and publishes the draft inside INPRN. Poll GET /schedule and match on externalReference if you want to reflect status back to your own users." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#1E3A5F] text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{step.t}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="pt-8 mt-4 border-t border-slate-100 text-xs text-slate-400">
            Reads and writes are scoped to your company automatically by the API key — you never send a company id
            yourself. Questions?{" "}
            <a href="/contact" className="text-[#1E3A5F] font-medium hover:underline">
              Contact us
            </a>
            .
          </div>
        </main>
      </div>
    </>
  );
}
