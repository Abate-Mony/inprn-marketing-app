import type { Metadata } from "next";
import { CheckCircle, Clock, Calendar, Users, FileText, Receipt, BarChart2, ArrowRight, Shield, Zap, Globe, ChevronRight } from "lucide-react";
import { TIMESHIFT_SIGNUP_URL } from "@/lib/timeshift";

export const metadata: Metadata = {
  title: "work.wrk — Workforce management without the paperwork",
  description:
    "Schedule shifts, verify attendance with geofenced GPS, manage timesheets and invoice clients from one place — built for security, cleaning, events and other shift-based operational teams.",
};

// ─── Dashboard Mockup ─────────────────────────────────────────────────────────

function DashboardMockup() {
  const stats = [
    { label: "Active Jobs", val: "8", sub: "+2 today", color: "#1E3A5F" },
    { label: "Working Now", val: "24", sub: "↑ 6 vs yest", color: "#10B981" },
    { label: "Hours Logged", val: "192h", sub: "This week", color: "#3B82F6" },
    { label: "Completion", val: "94%", sub: "↑ 2% wk/wk", color: "#F59E0B" },
  ];
  const jobs = [
    { name: "Canary Wharf Security — Night Shift", loc: "London E14", ws: ["JM", "PP"], status: "In Progress", sc: "#3B82F6", sb: "#EFF6FF" },
    { name: "Heathrow Terminal 5 — Cleaning", loc: "TW6", ws: ["SC", "TO"], status: "Assigned", sc: "#1E3A5F", sb: "#EEF2FF" },
    { name: "Oxford Street Retail Support", loc: "London W1", ws: ["AO"], status: "Assigned", sc: "#1E3A5F", sb: "#EEF2FF" },
    { name: "Waterloo Station Crowd Management", loc: "SE1", ws: ["MB"], status: "Pending", sc: "#F59E0B", sb: "#FFFBEB" },
  ];
  const activity = [
    { text: "James M. clocked in", sub: "Canary Wharf Security", dot: "#10B981", ago: "2m" },
    { text: "Sarah C. completed shift", sub: "Excel Centre", dot: "#1E3A5F", ago: "4h" },
    { text: "Tom O. accepted job", sub: "Westfield Stratford", dot: "#3B82F6", ago: "5h" },
    { text: "Priya P. clocked in", sub: "Canary Wharf Security", dot: "#10B981", ago: "2m" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/10 select-none" aria-hidden="true">
      {/* Browser chrome */}
      <div className="h-10 bg-[#1A2744] flex items-center px-4 gap-3">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 mx-6 h-6 bg-[#0F172A]/70 rounded-md flex items-center justify-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
          <span className="text-[11px] text-slate-400 font-medium">app.work.wrk</span>
        </div>
        <div className="w-16 shrink-0" />
      </div>

      {/* App layout */}
      <div className="flex" style={{ height: 440 }}>
        {/* Sidebar */}
        <div className="w-[188px] bg-[#0F172A] border-r border-white/5 flex flex-col py-4 px-3 shrink-0">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-5 px-1">
            <div className="w-6 h-6 rounded bg-[#1E3A5F] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
                <rect x="0" y="0" width="4" height="4" rx="1" fill="white" />
                <rect x="6" y="0" width="4" height="4" rx="1" fill="white" opacity="0.6" />
                <rect x="0" y="6" width="4" height="4" rx="1" fill="white" opacity="0.6" />
                <rect x="6" y="6" width="4" height="4" rx="1" fill="white" opacity="0.3" />
              </svg>
            </div>
            <span className="text-xs font-bold text-white">work.wrk</span>
          </div>

          {[
            { label: "Dashboard", active: true },
            { label: "Jobs", active: false },
            { label: "Workers", active: false },
            { label: "Calendar", active: false },
            { label: "Reports", active: false },
            { label: "Settings", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg mb-0.5 ${
                item.active ? "bg-[#1E3A5F]" : "hover:bg-white/5"
              }`}
            >
              <div className={`w-3.5 h-3.5 rounded-sm ${item.active ? "bg-white/30" : "bg-white/10"}`} />
              <span className={`text-[11px] font-medium ${item.active ? "text-white" : "text-white/50"}`}>{item.label}</span>
            </div>
          ))}

          <div className="mt-auto flex items-center gap-2 px-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center">
              <span className="text-[8px] font-bold text-blue-300">AM</span>
            </div>
            <div>
              <p className="text-[9px] font-medium text-white/70">Alex Morgan</p>
              <p className="text-[8px] text-white/30">Manager</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-[#F8FAFC] flex flex-col min-w-0">
          {/* TopBar */}
          <div className="h-11 bg-white border-b border-[#E2E8F0] px-4 flex items-center justify-between shrink-0">
            <span className="text-sm font-semibold text-slate-800">Dashboard</span>
            <div className="flex items-center gap-2.5">
              <div className="h-7 px-3 bg-slate-100 rounded-lg flex items-center gap-1.5">
                <div className="w-3 h-2.5 rounded-sm bg-slate-300" />
                <span className="text-[10px] text-slate-400">Search…</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">AM</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-hidden">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-2.5 mb-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-[#E2E8F0] p-3">
                  <p className="text-[9px] text-slate-500 mb-1.5">{s.label}</p>
                  <p className="text-[15px] font-bold leading-none" style={{ color: s.color }}>
                    {s.val}
                  </p>
                  <p className="text-[8px] text-slate-400 mt-1.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Two-col content */}
            <div className="grid grid-cols-5 gap-2.5" style={{ height: 244 }}>
              {/* Jobs table */}
              <div className="col-span-3 bg-white rounded-xl border border-[#E2E8F0] overflow-hidden flex flex-col">
                <div className="px-3 py-2 border-b border-[#F1F5F9] flex items-center justify-between shrink-0">
                  <p className="text-[11px] font-semibold text-slate-800">Today&apos;s Jobs</p>
                  <span className="text-[9px] text-blue-600 font-medium">View all</span>
                </div>
                <div className="flex-1 overflow-hidden">
                  {jobs.map((job) => (
                    <div key={job.name} className="px-3 py-2 flex items-center gap-2.5 border-b border-[#F8FAFC] last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-semibold text-slate-800 truncate">{job.name}</p>
                        <p className="text-[8px] text-slate-400">{job.loc}</p>
                      </div>
                      <div className="flex gap-0.5 shrink-0">
                        {job.ws.map((w) => (
                          <div key={w} className="w-[18px] h-[18px] rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-[6px] font-bold text-blue-700">{w}</span>
                          </div>
                        ))}
                      </div>
                      <span
                        className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
                        style={{ color: job.sc, background: job.sb }}
                      >
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="col-span-2 bg-white rounded-xl border border-[#E2E8F0] overflow-hidden flex flex-col">
                <div className="px-3 py-2 border-b border-[#F1F5F9] shrink-0">
                  <p className="text-[11px] font-semibold text-slate-800">Live Activity</p>
                </div>
                <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">
                  {activity.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="mt-[3px] w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.dot }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-medium text-slate-700 leading-tight">{a.text}</p>
                        <p className="text-[8px] text-slate-400 mt-0.5">{a.sub}</p>
                      </div>
                      <span className="text-[8px] text-slate-400 shrink-0">{a.ago}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section helpers ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mb-4">
      <span className="w-5 h-px bg-[#1E3A5F]" />
      {children}
    </p>
  );
}

function SectionHeading({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] ${light ? "text-white" : "text-slate-900"}`}>
      {children}
    </h2>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative bg-[#080F1C] pt-32 pb-0 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(30,58,95,0.5) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 64px 64px, 64px 64px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1E3A5F]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Workforce management for operational teams
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-7">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Workforce management{" "}
            <span className="text-white/40">without the</span>{" "}
            <span
              className="relative"
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              paperwork
            </span>
          </h1>
        </div>
        <p className="text-center text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Schedule shifts, verify attendance with geofenced GPS, manage timesheets and invoice clients from one place — built for security,
          cleaning, event staffing and other shift-based operational teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href={TIMESHIFT_SIGNUP_URL}
            className="h-12 px-7 rounded-xl bg-white text-[#0B1628] text-sm font-bold hover:bg-white/92 active:scale-[0.98] transition-all shadow-lg shadow-black/30 inline-flex items-center gap-2"
          >
            Get started free
            <ArrowRight size={15} />
          </a>
          <a
            href="#how-it-works"
            className="h-12 px-7 rounded-xl border border-white/15 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white transition-all inline-flex items-center"
          >
            See how it works
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {[
            { val: "5,000+", label: "shifts managed weekly" },
            { val: "200+", label: "active teams" },
            { val: "98%", label: "uptime SLA" },
          ].map((s) => (
            <div key={s.val} className="text-center">
              <p className="text-xl font-bold text-white">{s.val}</p>
              <p className="text-xs text-white/35 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Product mockup */}
        <div className="max-w-5xl mx-auto">
          <DashboardMockup />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

// ─── Features grid ────────────────────────────────────────────────────────────

const features = [
  {
    icon: <Calendar size={20} />,
    title: "Shift Scheduling",
    desc: "Create and assign shifts in seconds. Drag to reschedule, duplicate recurring patterns, and keep your calendar full.",
  },
  {
    icon: <Clock size={20} />,
    title: "Attendance Tracking",
    desc: "Workers clock in and out from the mobile app. Geofenced GPS verification confirms they're on-site, and flags check-ins that aren't.",
  },
  {
    icon: <FileText size={20} />,
    title: "Digital Timesheets",
    desc: "Automated timesheets generated from clock data. Managers approve with one click, then export payroll-ready CSV.",
  },
  {
    icon: <Users size={20} />,
    title: "Team Management",
    desc: "A complete view of every worker — roles, hours, job history — plus role-based access for admins, managers and workers.",
  },
  {
    icon: <Receipt size={20} />,
    title: "Client Invoicing",
    desc: "Turn approved timesheets into a client invoice — hourly or fixed rate, with VAT and payment tracking built in.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "Reports & Export",
    desc: "Payroll, timesheet, performance and profitability reports — see which clients and jobs are actually worth it.",
  },
];

function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <SectionHeading>Everything you need to run your team</SectionHeading>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            From scheduling to approval — work.wrk handles the operational detail so you can focus on the work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-7 rounded-2xl border border-slate-200 hover:border-[#1E3A5F]/30 hover:shadow-lg hover:shadow-[#1E3A5F]/5 transition-all duration-300 bg-white"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] mb-5 group-hover:bg-[#1E3A5F]/12 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────

const steps = [
  { n: "01", title: "Create your account", desc: "Sign up and set up your company in minutes. Add your locations and configure your team structure." },
  { n: "02", title: "Add your team", desc: "Invite workers by email or link. Set roles, skills and availability to build your workforce profile." },
  { n: "03", title: "Schedule shifts", desc: "Create jobs and assign workers. Set locations, times and priority — then publish with one click." },
  { n: "04", title: "Workers clock in", desc: "Workers see their upcoming jobs in the app, clock in when they arrive, and log breaks automatically." },
  { n: "05", title: "Review and approve", desc: "Timesheets are generated automatically. Review, adjust if needed, and export for payroll." },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 scroll-mt-[66px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>How it works</SectionLabel>
          <SectionHeading>Up and running in under an hour</SectionHeading>
          <p className="text-slate-500 mt-4 max-w-md mx-auto leading-relaxed">
            work.wrk is designed to be operational quickly — no lengthy implementations, no consultant needed.
          </p>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold mb-5 shrink-0 z-10 ${
                    i < 2 ? "bg-[#1E3A5F] text-white" : "bg-white border-2 border-slate-200 text-slate-500"
                  }`}
                >
                  {i < 2 ? <CheckCircle size={16} className="text-white/80" /> : s.n}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Audience sections ────────────────────────────────────────────────────────

function ForManagersSection() {
  const points = [
    "See who is working, where they are, and what job they're on — in real time.",
    "Approve or adjust timesheets before they go to payroll.",
    "Spot geofence-flagged check-ins and late clock-ins immediately.",
    "Turn approved timesheets straight into a client invoice.",
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>For managers</SectionLabel>
            <SectionHeading>
              Complete visibility.
              <br />
              Total control.
            </SectionHeading>
            <p className="text-slate-500 mt-5 mb-8 leading-relaxed">
              work.wrk gives operations managers the live view they need — without chasing workers for updates or building spreadsheets manually.
            </p>
            <div className="flex flex-col gap-4">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-[#1E3A5F]" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] p-6 shadow-xl" aria-hidden="true">
            {/* Mini live dashboard panel */}
            <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">Live now — 24 workers</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Canary Wharf", workers: 2, status: "In Progress", dot: "#10B981" },
                { label: "Heathrow T5", workers: 3, status: "In Progress", dot: "#10B981" },
                { label: "Westfield", workers: 4, status: "Assigned", dot: "#3B82F6" },
                { label: "Waterloo", workers: 2, status: "Pending", dot: "#F59E0B" },
              ].map((job) => (
                <div key={job.label} className="bg-white/8 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.dot }} />
                    <span className="text-xs font-semibold text-white">{job.label}</span>
                  </div>
                  <p className="text-[11px] text-white/40">
                    {job.workers} workers · {job.status}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">3 timesheets pending approval</p>
                <p className="text-[11px] text-white/40 mt-0.5">From yesterday&apos;s shifts</p>
              </div>
              <div className="h-7 px-3 bg-white/10 rounded-lg text-[11px] font-semibold text-white flex items-center">Review</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWorkersSection() {
  const points = [
    "See your upcoming shifts the moment they're scheduled.",
    "Accept or decline job assignments, or pick up open shifts yourself.",
    "Clock in and out with GPS confirmation — break tracking built in.",
    "View your hours and download your own PDF timesheet any time.",
  ];
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1 rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden" aria-hidden="true">
            {/* Phone mockup style */}
            <div className="bg-[#1E3A5F] px-5 pt-6 pb-5">
              <p className="text-xs text-white/50 mb-3">work.wrk · Worker App</p>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs font-semibold text-white mb-0.5">Next shift</p>
                <p className="text-base font-bold text-white">Canary Wharf Security</p>
                <p className="text-xs text-white/60 mt-1">Tomorrow · 22:00 – 06:00 · London E14</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">This week</p>
              {[
                { day: "Mon 4 Aug", job: "Excel Centre Event", h: "12h", done: true },
                { day: "Wed 6 Aug", job: "Canary Wharf Security", h: "8h", done: false },
                { day: "Fri 8 Aug", job: "Westfield Stratford", h: "10h", done: false },
              ].map((s) => (
                <div key={s.day} className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      s.done ? "bg-emerald-100" : "bg-[#1E3A5F]/8"
                    }`}
                  >
                    {s.done ? <CheckCircle size={14} className="text-emerald-600" /> : <Clock size={14} className="text-[#1E3A5F]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{s.job}</p>
                    <p className="text-xs text-slate-400">{s.day}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 shrink-0">{s.h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>For workers</SectionLabel>
            <SectionHeading>
              Everything your
              <br />
              team needs in one app.
            </SectionHeading>
            <p className="text-slate-500 mt-5 mb-8 leading-relaxed">
              Workers get their own mobile-first portal — simple enough for first-day operatives, powerful enough for experienced supervisors.
            </p>
            <div className="flex flex-col gap-4">
              {points.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-[#1E3A5F]" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Security / trust ─────────────────────────────────────────────────────────

function SecuritySection() {
  const pillars = [
    {
      icon: <Shield size={22} />,
      title: "Your data, your control",
      desc: "Workers and managers can view, export and request deletion of their own data at any time. You own your workforce records.",
    },
    {
      icon: <Zap size={22} />,
      title: "Secure sign-in",
      desc: "Sign in with Google or email and password. Role-based access keeps admins, managers and workers seeing only what they should.",
    },
    {
      icon: <Globe size={22} />,
      title: "Privacy by design",
      desc: "Location data is used only to verify attendance at the moment of clock-in. It is not stored continuously or shared with third parties.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Security &amp; trust</SectionLabel>
          <SectionHeading>Built with privacy in mind</SectionHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="text-center px-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] mx-auto mb-5">{p.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-28 bg-[#080F1C]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionLabel>Get started</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mt-2 mb-6">
          Ready to manage your workforce the right way?
        </h2>
        <p className="text-lg text-white/45 mb-10 leading-relaxed">
          Join teams already using work.wrk to schedule, track and pay their workforce — without the spreadsheets.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={TIMESHIFT_SIGNUP_URL}
            className="h-12 px-8 rounded-xl bg-white text-[#0B1628] text-sm font-bold hover:bg-white/90 active:scale-[0.98] transition-all inline-flex items-center gap-2 shadow-lg shadow-black/20"
          >
            Create your free account
            <ChevronRight size={16} />
          </a>
        </div>
        <p className="text-xs text-white/25 mt-5">No credit card required · Takes 5 minutes to set up</p>
      </div>
    </section>
  );
}

// ─── Composed page ────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ForManagersSection />
      <ForWorkersSection />
      <SecuritySection />
      <CTASection />
    </>
  );
}
