"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { TIMESHIFT_SIGNUP_URL } from "@/lib/timeshift";

type Billing = "monthly" | "annual";

interface Plan {
  id: "starter" | "growth" | "enterprise";
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  annualMonthly: number | null;
  ctaLabel: string;
  href: string;
  highlighted?: boolean;
  features: string[];
  notIncluded?: string[];
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small teams getting started",
    monthlyPrice: 0,
    annualPrice: 0,
    annualMonthly: 0,
    ctaLabel: "Continue free",
    href: TIMESHIFT_SIGNUP_URL,
    features: ["Up to 5 workers", "Up to 10 jobs per month", "Clock-in / clock-out", "Basic digital timesheets", "CSV export", "Email support"],
    notIncluded: ["GPS verification", "Recurring jobs", "Advanced reports"],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing operational teams",
    monthlyPrice: 49,
    annualPrice: 468,
    annualMonthly: 39,
    ctaLabel: "Get started",
    href: TIMESHIFT_SIGNUP_URL,
    highlighted: true,
    features: [
      "Unlimited workers",
      "Unlimited jobs",
      "GPS clock-in verification",
      "Recurring job templates",
      "Manager approval workflows",
      "Advanced reports & analytics",
      "Location management",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large organisations",
    monthlyPrice: null,
    annualPrice: null,
    annualMonthly: null,
    ctaLabel: "Contact sales",
    href: "/contact",
    features: [
      "Everything in Growth",
      "Multi-site management",
      "Google Workspace / SSO",
      "Dedicated account manager",
      "Custom integrations",
      "Audit logs",
      "SLA guarantee",
      "Bulk data import",
    ],
  },
];

function getPrice(plan: Plan, billing: Billing): number | null {
  return billing === "annual" ? plan.annualMonthly : plan.monthlyPrice;
}

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-1 bg-slate-100 rounded-xl p-1">
          {(["monthly", "annual"] as Billing[]).map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBilling(b)}
              className={`relative h-9 px-4 rounded-lg text-sm font-semibold transition-all duration-200 ${
                billing === b ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {b === "annual" ? "Annual" : "Monthly"}
              {b === "annual" && (
                <span
                  className={`ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-opacity ${
                    billing === "annual" ? "bg-emerald-100 text-emerald-700 opacity-100" : "opacity-0"
                  }`}
                >
                  SAVE 20%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => {
          const price = getPrice(plan, billing);
          const isExternal = plan.href.startsWith("http");
          const ctaClass = `w-full h-11 rounded-xl text-sm font-semibold transition-all inline-flex items-center justify-center ${
            plan.highlighted ? "bg-white text-[#1E3A5F] hover:bg-white/90" : "border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`;

          return (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlighted ? "bg-[#1E3A5F] text-white ring-2 ring-[#1E3A5F]" : "bg-white border border-slate-200"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3B82F6] text-white text-[11px] font-bold whitespace-nowrap">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? "text-white/60" : "text-slate-500"}`}>{plan.tagline}</p>
              </div>

              <div className="mb-6 h-14">
                {price === null ? (
                  <div>
                    <p className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>Custom</p>
                    <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/50" : "text-slate-400"}`}>Contact us for pricing</p>
                  </div>
                ) : price === 0 ? (
                  <div>
                    <p className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>Free</p>
                    <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/50" : "text-slate-400"}`}>Forever, no card required</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-end gap-1.5">
                      <p className={`text-3xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>£{price}</p>
                      <p className={`text-sm mb-1 ${plan.highlighted ? "text-white/50" : "text-slate-400"}`}>/ mo</p>
                    </div>
                    {billing === "annual" && plan.annualPrice != null && (
                      <p className={`text-xs mt-1 ${plan.highlighted ? "text-emerald-300" : "text-emerald-600"}`}>
                        Billed £{plan.annualPrice}/year
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={14} className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-emerald-300" : "text-[#1E3A5F]"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white/80" : "text-slate-600"}`}>{f}</span>
                  </div>
                ))}
                {plan.notIncluded?.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 opacity-40">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-500 line-through">{f}</span>
                  </div>
                ))}
              </div>

              {isExternal ? (
                <a href={plan.href} className={ctaClass}>
                  {plan.ctaLabel}
                </a>
              ) : (
                <Link href={plan.href} className={ctaClass}>
                  {plan.ctaLabel}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
