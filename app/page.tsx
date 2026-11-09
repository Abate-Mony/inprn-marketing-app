import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Users,
  Receipt,
  BarChart2,
  Smartphone,
  Bell,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  MapPin,
} from "lucide-react";
import { SIGNUP_URL } from "@/lib/appUrls";

export const metadata: Metadata = {
  title: "OnClockly — Workforce management without the paperwork",
  description:
    "Schedule shifts, verify attendance with geofenced GPS, manage timesheets and invoice clients from one place — built for security, cleaning, events and other shift-based operational teams.",
};

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

function ProofStack() {
  const rows = [
    { name: "James M.", time: "22:04" },
    { name: "Sarah C.", time: "04:01" },
    { name: "Priya P.", time: "22:11" },
  ];

  return (
    <div className="relative mx-auto max-w-xs lg:mx-0 lg:max-w-none" aria-hidden="true">
      {/* Back card — invoice */}
      <div className="hidden sm:block absolute -right-4 -top-7 w-48 rotate-6 rounded-xl bg-white shadow-xl ring-1 ring-slate-900/5 p-4">
        <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Invoice · INV-1084</p>
        <p className="text-xl font-bold text-slate-900">£604.80</p>
        <p className="text-[11px] text-emerald-600 font-medium mt-1">Paid · Canary Wharf Retail</p>
      </div>

      {/* Front card — timesheet */}
      <div className="relative -rotate-2 rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.5)] ring-1 ring-slate-900/5 p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Timesheet · Week 32</p>
            <p className="text-sm font-bold text-slate-900 mt-0.5">Canary Wharf Security</p>
          </div>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 shrink-0">Approved</span>
        </div>
        <div className="flex flex-col gap-3">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-600 shrink-0">
                {r.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="text-xs font-medium text-slate-700 flex-1">{r.name}</span>
              <span className="text-xs text-slate-400">{r.time}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating GPS chip */}
      <div className="absolute -left-3 -bottom-5 sm:-left-6 flex items-center gap-1.5 rounded-full bg-[#080F1C] text-white text-[11px] font-medium pl-2.5 pr-3.5 py-2 shadow-xl ring-1 ring-white/10">
        <MapPin size={12} className="text-emerald-400" />
        GPS-verified · on site
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-[#080F1C] pt-40 pb-28 overflow-hidden">
      {/* Fine grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/80 mb-6">
              For security, cleaning &amp; event staffing teams
            </p>
            <h1 className="text-[clamp(2.75rem,6vw,5.25rem)] font-bold tracking-tight leading-[0.98] text-white">
              Run the shift.
              <br />
              <span className="text-white/35">Not the spreadsheet.</span>
            </h1>
            <p className="mt-8 text-lg text-white/55 max-w-md leading-relaxed">
              Schedule the week, verify who actually showed up with geofenced GPS, and send the invoice before the client has to ask for it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={SIGNUP_URL}
                className="h-12 px-7 rounded-full bg-white text-[#0B1628] text-sm font-bold hover:bg-white/90 active:scale-[0.98] transition-all shadow-lg shadow-black/30 inline-flex items-center gap-2"
              >
                Start free — no card needed
                <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-semibold text-white/70 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/50 transition-colors"
              >
                See how it works
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/35">
              <span>Geofenced GPS attendance</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Client invoicing built in</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Payroll-ready timesheets</span>
            </div>
          </div>

          <div className="lg:col-span-5 pt-10 lg:pt-0">
            <ProofStack />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features bento ───────────────────────────────────────────────────────────

const smallFeatures = [
  { icon: <Calendar size={18} />, title: "Shift Scheduling", desc: "Create, assign and publish shifts in seconds." },
  { icon: <Clock size={18} />, title: "Attendance Tracking", desc: "Geofenced GPS clock-in, with break tracking built in." },
  { icon: <FileText size={18} />, title: "Digital Timesheets", desc: "Auto-generated from clock data, approved in one click." },
  { icon: <Users size={18} />, title: "Team Management", desc: "Role-based access for admins, managers and workers." },
  { icon: <BarChart2 size={18} />, title: "Reports & Export", desc: "Payroll, performance and profitability reports." },
  { icon: <Smartphone size={18} />, title: "Client Portal", desc: "Clients review bookings and pay invoices themselves." },
];

function FeaturesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <SectionLabel>Features</SectionLabel>
          <SectionHeading>Everything you need to run your team</SectionHeading>
          <p className="text-slate-500 mt-4 leading-relaxed">
            From scheduling to the invoice — OnClockly handles the operational detail so you can focus on the work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Flagship tile */}
          <div className="sm:col-span-2 rounded-2xl bg-[#1E3A5F] text-white p-7 flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Receipt size={18} />
            </div>
            <h3 className="text-xl font-bold mb-2">Client Invoicing</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Turn approved timesheets into a client invoice — hourly or fixed rate, with VAT and payment tracking built in.
            </p>
            <div className="mt-auto flex flex-col gap-2 bg-white/5 rounded-xl p-4">
              {[
                { l: "James M. — 8.0h", v: "£144.00" },
                { l: "Sarah C. — 8.0h", v: "£144.00" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between text-xs">
                  <span className="text-white/50">{r.l}</span>
                  <span className="font-semibold text-white">{r.v}</span>
                </div>
              ))}
              <div className="h-px bg-white/10 my-1" />
              <div className="flex items-center justify-between text-xs font-bold">
                <span>Total due</span>
                <span>£604.80</span>
              </div>
            </div>
          </div>

          {smallFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-5 hover:border-[#1E3A5F]/30 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] mb-4">{f.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{f.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
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
    <section id="how-it-works" className="py-28 bg-[#F7F6F3] scroll-mt-[66px]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <SectionLabel>How it works</SectionLabel>
          <SectionHeading>Up and running in under an hour</SectionHeading>
          <p className="text-slate-500 mt-4 leading-relaxed">
            OnClockly is designed to be operational quickly — no lengthy implementations, no consultant needed.
          </p>
        </div>

        <div className="flex flex-col border-t border-slate-200">
          {steps.map((s) => (
            <div key={s.n} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-7 border-b border-slate-200">
              <span className="font-mono text-sm text-slate-300 group-hover:text-[#1E3A5F] transition-colors w-10 shrink-0">{s.n}</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-xl">{s.desc}</p>
              </div>
            </div>
          ))}
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
  const liveJobs = [
    { label: "Canary Wharf", workers: 2, dot: "#10B981" },
    { label: "Heathrow T5", workers: 3, dot: "#10B981" },
    { label: "Westfield", workers: 4, dot: "#3B82F6" },
    { label: "Waterloo", workers: 2, dot: "#F59E0B" },
  ];
  return (
    <section className="py-28 bg-white">
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
              OnClockly gives operations managers the live view they need — without chasing workers for updates or building spreadsheets manually.
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

          {/* Visual — live status card */}
          <div className="border border-slate-200 rounded-2xl p-8" aria-hidden="true">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Right now</p>
            <p className="text-5xl font-bold text-slate-900 tracking-tight mb-1">24</p>
            <p className="text-sm text-slate-500 mb-8">workers clocked in across 4 sites</p>

            <div className="flex flex-col">
              {liveJobs.map((j, i) => (
                <div key={j.label} className={`flex items-center justify-between py-3 ${i !== 0 ? "border-t border-slate-100" : ""}`}>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: j.dot }} />
                    <span className="text-sm font-medium text-slate-700">{j.label}</span>
                  </div>
                  <span className="text-xs text-slate-400">{j.workers} workers</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">3 timesheets pending approval</span>
              <ArrowRight size={14} className="text-[#1E3A5F]" />
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
  const shiftsThisWeek = [
    { day: "Mon 4 Aug", job: "Excel Centre Event", h: "12h", done: true },
    { day: "Wed 6 Aug", job: "Canary Wharf Security", h: "8h", done: false },
    { day: "Fri 8 Aug", job: "Westfield Stratford", h: "10h", done: false },
  ];
  return (
    <section className="py-28 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual — phone frame */}
          <div className="order-2 lg:order-1 flex justify-center" aria-hidden="true">
            <div className="w-[260px] rounded-[2.25rem] bg-[#080F1C] p-2.5 shadow-2xl">
              <div className="rounded-[1.75rem] bg-white overflow-hidden">
                <div className="h-6 flex items-center justify-center bg-white">
                  <div className="w-16 h-4 rounded-full bg-slate-900" />
                </div>
                <div className="bg-[#1E3A5F] px-4 pt-2 pb-5">
                  <p className="text-[10px] text-white/50 mb-2">Next shift</p>
                  <p className="text-sm font-bold text-white">Canary Wharf Security</p>
                  <p className="text-[11px] text-white/60 mt-0.5">Tomorrow · 22:00–06:00</p>
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-3">This week</p>
                  {shiftsThisWeek.map((s) => (
                    <div key={s.day} className="flex items-center gap-2.5 py-2.5 border-b border-slate-100 last:border-0">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          s.done ? "bg-emerald-100" : "bg-[#1E3A5F]/8"
                        }`}
                      >
                        {s.done ? <CheckCircle size={12} className="text-emerald-600" /> : <Clock size={12} className="text-[#1E3A5F]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-800 truncate">{s.job}</p>
                        <p className="text-[10px] text-slate-400">{s.day}</p>
                      </div>
                      <span className="text-xs font-semibold text-slate-600 shrink-0">{s.h}</span>
                    </div>
                  ))}
                </div>
              </div>
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

function ForClientsSection() {
  const points = [
    "Review a new quote and accept or decline it right from their phone.",
    "See every booking — upcoming, in progress or completed — with live status updates.",
    "Request a new booking, or a reschedule, without a single phone call.",
    "View and pay invoices as soon as they're sent, with a clear record of what's due.",
    "Get an instant notification the moment a booking's approved, a visit's starting soon, or a new invoice lands.",
  ];
  const notifications = [
    { label: "Quote #Q-2291 sent", sub: "Office deep clean — awaiting your review", icon: <FileText size={14} className="text-[#1E3A5F]" />, bg: "bg-[#1E3A5F]/8" },
    { label: "Invoice #INV-1084 paid", sub: "£420.00 · Thanks for your payment", icon: <CheckCircle size={14} className="text-emerald-600" />, bg: "bg-emerald-100" },
    { label: "Booking starting soon", sub: "Reception refresh — today at 14:00", icon: <Clock size={14} className="text-[#1E3A5F]" />, bg: "bg-[#1E3A5F]/8" },
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>For clients</SectionLabel>
            <SectionHeading>
              A better experience
              <br />
              for the people you serve.
            </SectionHeading>
            <p className="text-slate-500 mt-5 mb-8 leading-relaxed">
              Your clients get their own branded portal and mobile app — so every booking, quote and invoice lives in one place instead of
              scattered across email threads.
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

          {/* Visual — portal window */}
          <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden" aria-hidden="true">
            <div className="h-9 bg-slate-50 border-b border-slate-200 flex items-center px-4">
              <span className="text-[11px] text-slate-400 font-mono">portal.onclockly.com</span>
            </div>
            <div className="bg-[#1E3A5F] px-5 py-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0 mt-0.5">
                <Bell size={14} className="text-emerald-300" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-0.5">Booking approved</p>
                <p className="text-xs text-white/60">Your visit for Thu 7 Aug has been confirmed — 09:00</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Your updates</p>
              {notifications.map((n) => (
                <div key={n.label} className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${n.bg}`}>{n.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{n.label}</p>
                    <p className="text-xs text-slate-400 truncate">{n.sub}</p>
                  </div>
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
      icon: <Shield size={18} />,
      title: "Your data, your control",
      desc: "Workers and managers can view, export and request deletion of their own data at any time. You own your workforce records.",
    },
    {
      icon: <Zap size={18} />,
      title: "Secure sign-in",
      desc: "Sign in with Google or email and password. Role-based access keeps admins, managers and workers seeing only what they should.",
    },
    {
      icon: <Globe size={18} />,
      title: "Privacy by design",
      desc: "Location data is used only to verify attendance at the moment of clock-in. It is not stored continuously or shared with third parties.",
    },
  ];
  return (
    <section className="py-28 bg-[#F7F6F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <SectionLabel>Security &amp; trust</SectionLabel>
          <SectionHeading>Built with privacy in mind</SectionHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-slate-200 border-t border-b border-slate-200">
          {pillars.map((p) => (
            <div key={p.title} className="py-8 md:px-8 first:md:pl-0">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-[#1E3A5F]">{p.icon}</span>
                <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
              </div>
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
  const stats = [
    { val: "5,000+", label: "shifts managed weekly" },
    { val: "200+", label: "active teams" },
    { val: "98%", label: "uptime SLA" },
  ];
  return (
    <section className="py-28 bg-[#080F1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mt-2 mb-6">
              Ready to manage your workforce the right way?
            </h2>
            <p className="text-lg text-white/45 mb-10 leading-relaxed max-w-md">
              Join teams already using OnClockly to schedule, track and pay their workforce — without the spreadsheets.
            </p>
            <a
              href={SIGNUP_URL}
              className="h-12 px-8 rounded-full bg-white text-[#0B1628] text-sm font-bold hover:bg-white/90 active:scale-[0.98] transition-all inline-flex items-center gap-2 shadow-lg shadow-black/20"
            >
              Create your free account
              <ArrowRight size={16} />
            </a>
            <p className="text-xs text-white/25 mt-5">No credit card required · Takes 5 minutes to set up</p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-0 lg:divide-y divide-white/10 lg:border-t lg:border-white/10">
            {stats.map((s) => (
              <div key={s.val} className="text-center lg:text-left lg:py-6">
                <p className="text-3xl md:text-4xl font-bold text-white">{s.val}</p>
                <p className="text-sm text-white/35 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
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
      <ForClientsSection />
      <SecuritySection />
      <CTASection />
    </>
  );
}
