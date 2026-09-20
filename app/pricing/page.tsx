import type { Metadata } from "next";
import Link from "next/link";
import { PricingPlans } from "@/components/marketing/PricingPlans";
import { getPlanCatalog } from "@/lib/api";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for INPRN — a free Starter plan, a Growth plan for growing teams, and custom Enterprise pricing.",
};

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes — Starter is free forever for teams of up to 5 workers and 10 jobs a month. No credit card required.",
  },
  {
    q: "Do I need to enter payment details to get started?",
    a: "No. You can create an account on the Starter plan and explore INPRN without a credit card.",
  },
  {
    q: "How does upgrading to Growth or Enterprise work?",
    a: "Create your account on Starter, then get in touch with us to move to Growth or Enterprise — we'll get your plan and billing set up directly during this early-access period.",
  },
  {
    q: "Can I import my existing worker and job data?",
    a: "Enterprise plans include bulk data import. On other plans, you can add workers and jobs manually or contact support for help.",
  },
  {
    q: "What happens to my data if I stop using INPRN?",
    a: "You can export all your data at any time. On request, we will delete your account and associated records. See our Privacy Policy for details.",
  },
];

export default async function PricingPage() {
  const plans = await getPlanCatalog();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#080F1C]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-5">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">Simple, transparent pricing</h1>
          <p className="text-lg text-white/45 leading-relaxed">
            Start free. Upgrade as your team grows. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <PricingPlans plans={plans} />
        </div>
      </section>

      {/* Talk to us */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Not sure which plan fits your team?</h2>
          <p className="text-slate-500 mb-6">Tell us about your operation and we&apos;ll help you pick the right plan.</p>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 rounded-xl bg-[#1E3A5F] text-white text-sm font-semibold hover:bg-[#162D4A] transition-all"
          >
            Talk to us
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Common questions</h2>
          <div className="flex flex-col gap-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-slate-100 pb-6 last:border-0">
                <p className="text-base font-semibold text-slate-900 mb-2">{item.q}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
