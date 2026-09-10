import type { Metadata } from "next";
import {
  Calendar,
  Clock,
  FileText,
  Users,
  Bell,
  BarChart2,
  MapPin,
  CheckCircle,
  Smartphone,
  Receipt,
  RefreshCw,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SIGNUP_URL } from "@/lib/appUrls";

export const metadata: Metadata = {
  title: "Features",
  description:
    "A complete toolkit for workforce operations — scheduling, geofenced attendance tracking, recurring jobs, client invoicing, team management and reporting.",
};

function PageHero() {
  return (
    <section className="pt-32 pb-20 bg-[#080F1C]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-5">Platform features</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          A complete toolkit for workforce operations
        </h1>
        <p className="text-lg text-white/45 mb-10 leading-relaxed max-w-xl mx-auto">
          INPRN covers every step from scheduling a shift to invoicing the client — scheduling, attendance, timesheets, billing and reporting in
          one place.
        </p>
        <a
          href={SIGNUP_URL}
          className="h-11 px-7 rounded-xl bg-white text-[#0B1628] text-sm font-bold hover:bg-white/90 transition-all inline-flex items-center gap-2"
        >
          Get started free <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}

const featureSections = [
  {
    icon: <Calendar size={24} />,
    title: "Shift Scheduling",
    badge: "Scheduling",
    headline: "Fill your calendar without the back-and-forth",
    desc: "Create jobs, assign workers and publish shifts in one place. Managers see a real-time calendar view of all active and upcoming work. Workers are notified instantly when they're assigned a job.",
    bullets: [
      "Create single or recurring shifts",
      "Assign by skill, availability or location",
      "Set priority levels and special instructions",
      "Publish immediately or save as draft",
    ],
    flip: false,
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Recurring Jobs & Open Shifts",
    badge: "Automation",
    headline: "Stop rebuilding the same shift every week",
    desc: "Set up a recurring job once — daily, weekly or monthly — and INPRN generates every future occurrence automatically. If a shift is left unassigned, qualifying workers can pick it up themselves as an open shift, with optional manager approval before it's confirmed.",
    bullets: [
      "Daily, weekly or monthly recurrence patterns",
      "Bulk-accept upcoming recurring shifts from the mobile app",
      "Unassigned shifts published as open shifts workers can claim",
      "Manager approval required before a claim is confirmed, if you choose",
    ],
    flip: true,
  },
  {
    icon: <Clock size={24} />,
    title: "Attendance Tracking",
    badge: "Clock-in / Clock-out",
    headline: "Know exactly when your team is on-site",
    desc: "Workers clock in and out from the mobile app. A geofence around each job site checks the worker's GPS position and distance against the site radius, and flags out-of-range check-ins for manager review — without continuously tracking location outside a clock event.",
    bullets: [
      "Geofenced GPS clock-in and clock-out per job site",
      "Out-of-range check-ins automatically flagged for review",
      "Break tracking — paid and unpaid — recorded separately from billable time",
      "Overtime review workflow for hours beyond the scheduled shift",
    ],
    flip: false,
  },
  {
    icon: <FileText size={24} />,
    title: "Digital Timesheets",
    badge: "Timesheets",
    headline: "Payroll-ready timesheets, automatically generated",
    desc: "Every clock-in generates a timesheet entry. Managers review and approve before export. Workers can download their own PDF timesheet for any weekly, biweekly or monthly period straight from the mobile app.",
    bullets: [
      "Auto-generated from clock-in/clock-out data",
      "One-click manager approval workflow",
      "Worker-side PDF timesheet downloads by period",
      "Worker-level and job-level breakdown, exportable as CSV",
    ],
    flip: true,
  },
  {
    icon: <Receipt size={24} />,
    title: "Client Billing & Invoicing",
    badge: "Invoicing",
    headline: "Turn completed shifts into an invoice, automatically",
    desc: "Keep a record for every client you work for — contacts, billing terms and default rates — then pull eligible completed work straight into an invoice. Bill hourly or as a fixed job fee, add VAT and adjustments, and track the invoice through to payment.",
    bullets: [
      "Client records with multiple contacts and billing terms",
      "Per-job, weekly, fortnightly or monthly billing cadence per client",
      "Generate invoices from approved timesheets — hourly or fixed rate",
      "VAT, adjustments, PDF export and payment status tracking",
    ],
    flip: false,
  },
  {
    icon: <Users size={24} />,
    title: "Team Management",
    badge: "Workers",
    headline: "Your entire workforce in one profile per person",
    desc: "Each worker gets a profile with their contact details, role, completed jobs, hours and job history. Invite new team members by email — they set up their own account, or link an existing one, in a couple of minutes.",
    bullets: [
      "Worker profiles with full job history and stats",
      "Email invitations for new and existing team members",
      "Role-based access — admin, manager or worker",
      "Account restrictions for compliance or disciplinary needs, with an appeal process",
    ],
    flip: true,
  },
  {
    icon: <Bell size={24} />,
    title: "Notifications",
    badge: "Communication",
    headline: "Keep everyone in the loop, automatically",
    desc: "The right people receive the right notifications on the right channel. Routine updates stay in-app or push; anything that needs a manager's attention — a late start, a geofence warning, an overtime review — also goes to email.",
    bullets: [
      "Job assigned, accepted or declined notifications for workers",
      "Clock-in, late-start and geofence-warning alerts for managers",
      "Timesheet submitted / approved / rejected updates",
      "Configurable per event, across email, push and in-app",
    ],
    flip: false,
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Reports & Analytics",
    badge: "Reporting",
    headline: "The numbers your business actually needs",
    desc: "A dedicated report for every question you ask at the end of the month — hours and cost by worker or job, payroll-ready exports, worker performance over time, and which clients and jobs are actually profitable.",
    bullets: [
      "Payroll reports ready for export",
      "Timesheet and attendance reports by worker, job or location",
      "Worker performance over time",
      "Profitability by client — invoiced vs. collected revenue",
    ],
    flip: true,
  },
];

const extras = [
  {
    icon: <Smartphone size={18} />,
    title: "Mobile-first worker app",
    desc: "A live shift timer, break tracking and one-tap directions to the job site, built for on-site use.",
  },
  {
    icon: <MapPin size={18} />,
    title: "Geofenced locations",
    desc: "Register site locations with a geofence radius so clock-ins are verified against the right place.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Role-based access",
    desc: "Admin, manager and worker roles control who can see billing, invite teammates or approve timesheets.",
  },
  {
    icon: <Receipt size={18} />,
    title: "Data export",
    desc: "Export timesheets, worker records and invoices as CSV or PDF whenever you need them.",
  },
];

// Small feature visual per section
function FeatureVisual({ title }: { title: string }) {
  if (title === "Shift Scheduling") {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    return (
      <div className="flex flex-col gap-2">
        {days.map((d, i) => (
          <div key={d} className="flex items-center gap-2">
            <span className="text-xs text-slate-400 w-8">{d}</span>
            {i % 3 !== 2 && (
              <div
                className={`h-7 rounded-lg flex items-center px-3 text-xs font-medium ${
                  i === 0
                    ? "bg-[#1E3A5F] text-white w-32"
                    : i === 1
                    ? "bg-blue-100 text-blue-700 w-24"
                    : i === 3
                    ? "bg-emerald-100 text-emerald-700 w-28"
                    : "bg-amber-50 text-amber-700 w-36"
                }`}
              >
                {i === 0 ? "Night Shift · 22:00" : i === 1 ? "Day Patrol · 09:00" : i === 3 ? "Event Staffing" : "Cleaning · 04:00"}
              </div>
            )}
            {i % 3 === 2 && (
              <div className="h-7 w-20 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
                <span className="text-xs text-slate-300">+ Add</span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  if (title === "Recurring Jobs & Open Shifts") {
    return (
      <div className="flex flex-col gap-3">
        <div className="bg-white rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] shrink-0">
            <RefreshCw size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">Canary Wharf Security</p>
            <p className="text-xs text-slate-400">Repeats weekly · Mon, Wed, Fri</p>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 shrink-0">12 upcoming</span>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
            <Calendar size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-800 truncate">Waterloo Crowd Management</p>
            <p className="text-xs text-amber-700">Open shift · unassigned</p>
          </div>
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-600 text-white shrink-0">Claim</span>
        </div>
      </div>
    );
  }
  if (title === "Attendance Tracking") {
    return (
      <div className="flex flex-col gap-3">
        {[
          { name: "James M.", time: "22:04", status: "Clocked in", color: "#10B981", bg: "#ECFDF5" },
          { name: "Sarah C.", time: "04:01", status: "Clocked in", color: "#10B981", bg: "#ECFDF5" },
          { name: "Tom O.", time: "22:41", status: "Flagged — 340m away", color: "#DC2626", bg: "#FEF2F2" },
        ].map((r) => (
          <div key={r.name} className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 px-3 py-2.5">
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-600">
              {r.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="text-sm font-medium text-slate-800 flex-1">{r.name}</span>
            <span className="text-xs text-slate-400">{r.time}</span>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ color: r.color, background: r.bg }}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (title === "Digital Timesheets") {
    return (
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wide px-3 mb-1">
          <span>Worker</span>
          <span>Date</span>
          <span>Hours</span>
          <span>Status</span>
        </div>
        {[
          { n: "James M.", d: "25 Jul", h: "8.0h", s: "Approved", sc: "#10B981", sb: "#ECFDF5" },
          { n: "Sarah C.", d: "25 Jul", h: "8.0h", s: "Approved", sc: "#10B981", sb: "#ECFDF5" },
          { n: "Tom O.", d: "25 Jul", h: "7.5h", s: "Pending", sc: "#F59E0B", sb: "#FFFBEB" },
          { n: "Priya P.", d: "24 Jul", h: "12h", s: "Approved", sc: "#10B981", sb: "#ECFDF5" },
        ].map((r) => (
          <div key={r.n} className="grid grid-cols-4 items-center bg-white rounded-lg border border-slate-100 px-3 py-2 text-xs">
            <span className="font-medium text-slate-800">{r.n}</span>
            <span className="text-slate-500">{r.d}</span>
            <span className="font-semibold text-slate-700">{r.h}</span>
            <span className="font-semibold px-1.5 py-0.5 rounded-full w-fit" style={{ color: r.sc, background: r.sb }}>
              {r.s}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (title === "Client Billing & Invoicing") {
    const lines = [
      { label: "James M. — 8.0h @ £18/h", amount: "£144.00" },
      { label: "Sarah C. — 8.0h @ £18/h", amount: "£144.00" },
      { label: "Priya P. — 12.0h @ £18/h", amount: "£216.00" },
    ];
    return (
      <div className="bg-white rounded-xl border border-slate-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-slate-800">Invoice — Canary Wharf Retail Ltd</p>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">Sent</span>
        </div>
        <div className="flex flex-col gap-2 mb-3">
          {lines.map((l) => (
            <div key={l.label} className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{l.label}</span>
              <span className="font-medium text-slate-700">{l.amount}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 pt-3 flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>VAT (20%)</span>
            <span>£100.80</span>
          </div>
          <div className="flex items-center justify-between text-sm font-bold text-slate-900">
            <span>Total due</span>
            <span>£604.80</span>
          </div>
        </div>
      </div>
    );
  }
  // Generic visual for remaining sections
  return (
    <div className="flex flex-col gap-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-10 bg-white rounded-xl border border-slate-100 flex items-center px-4 gap-3">
          <div className={`w-6 h-6 rounded-full bg-[#1E3A5F]/${(i + 1) * 10 + 10} flex-shrink-0`} />
          <div className="flex-1 h-2 rounded-full bg-slate-100" />
          <div className="w-12 h-2 rounded-full bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <PageHero />

      {/* Feature sections */}
      <div className="divide-y divide-slate-100">
        {featureSections.map((f, i) => (
          <section key={f.title} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${f.flip ? "lg:flex-row-reverse" : ""}`}>
                {/* Copy side */}
                <div className={f.flip ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A5F]/8 mb-5">
                    <span className="text-[#1E3A5F]">{f.icon}</span>
                    <span className="text-xs font-semibold text-[#1E3A5F]">{f.badge}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-4">{f.headline}</h2>
                  <p className="text-slate-500 leading-relaxed mb-7">{f.desc}</p>
                  <div className="flex flex-col gap-3">
                    {f.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="text-[#1E3A5F] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div className={f.flip ? "lg:order-1" : ""}>
                  <div className={`rounded-2xl border border-slate-200 p-7 shadow-sm ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`} aria-hidden="true">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] mb-5">{f.icon}</div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">{f.badge}</p>
                    <FeatureVisual title={f.title} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Extra features */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Also included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((e) => (
              <div key={e.title} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <div className="w-9 h-9 rounded-xl bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] mb-4">{e.icon}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{e.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080F1C] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Start free, upgrade when you need to</h2>
          <p className="text-white/45 mb-8">Starter is free for teams of up to 5 workers. Get started today and see what INPRN can do for your team.</p>
          <a
            href={SIGNUP_URL}
            className="h-11 px-7 rounded-xl bg-white text-[#0B1628] text-sm font-bold hover:bg-white/90 transition-all inline-flex items-center"
          >
            Create your free account
          </a>
        </div>
      </section>
    </>
  );
}
