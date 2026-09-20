"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { SIGNUP_URL } from "@/lib/appUrls";
import type { PlanCatalogEntry } from "@/lib/api";

type Billing = "monthly" | "annual";

function getPrice(plan: PlanCatalogEntry, billing: Billing): number | null {
  return billing === "annual" ? plan.annualMonthly : plan.monthlyPrice;
}

function planHref(plan: PlanCatalogEntry): string {
  return plan.monthlyPrice === null ? "/contact" : SIGNUP_URL;
}

interface PricingPlansProps {
  // Fetched server-side in pricing/page.tsx from the backend's public
  // GET /plans endpoint — null means that fetch failed (backend down/
  // unreachable), which we surface as a message rather than silently
  // falling back to stale hardcoded numbers.
  plans: PlanCatalogEntry[] | null;
}

export function PricingPlans({ plans }: PricingPlansProps) {
  const [billing, setBilling] = useState<Billing>("monthly");

  if (!plans) {
    return (
      <p className="text-center text-slate-500 py-12">
        Couldn&apos;t load pricing right now — please try refreshing, or{" "}
        <Link href="/contact" className="text-[#1E3A5F] font-semibold underline">
          contact us
        </Link>{" "}
        for plan details.
      </p>
    );
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => {
          const price = getPrice(plan, billing);
          const href = planHref(plan);
          const isExternal = href.startsWith("http");
          const ctaClass = `w-full h-11 rounded-xl text-sm font-semibold transition-all inline-flex items-center justify-center ${
            plan.highlighted ? "bg-white text-[#1E3A5F] hover:bg-white/90" : "border border-slate-200 text-slate-700 hover:bg-slate-50"
          }`;

          return (
            <div
              key={plan.id}
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
                <a href={href} className={ctaClass}>
                  {plan.ctaLabel}
                </a>
              ) : (
                <Link href={href} className={ctaClass}>
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
