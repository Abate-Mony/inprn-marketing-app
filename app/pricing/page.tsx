import type { Metadata } from "next";
import Link from "next/link";
import { PricingPlans } from "@/components/marketing/PricingPlans";
import { PageHero } from "@/components/marketing/PageHero";
import { getPlanCatalog } from "@/lib/api";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for OnClockly — a free Starter plan, a Growth plan for growing teams, and custom Enterprise pricing.",
};

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes — Starter is free forever for teams of up to 5 workers and 10 jobs a month. No credit card required.",
  },
  {
    q: "Do I need to enter payment details to get started?",
    a: "No. You can create an account on the Starter plan and explore OnClockly without a credit card.",
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
    q: "What happens to my data if I stop using OnClockly?",
    a: "You can export all your data at any time. On request, we will delete your account and associated records. See our Privacy Policy for details.",
  },
];

export default async function PricingPage() {
  const plans = await getPlanCatalog();

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        description="Start free. Upgrade as your team grows. No hidden fees, no long-term contracts."
      />

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <PricingPlans plans={plans} />
        </div>
      </section>

      {/* Talk to us */}
      <section className="py-16 bg-[#F7F6F3] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Not sure which plan fits your team?</h2>
            <p className="text-slate-500">Tell us about your operation and we&apos;ll help you pick the right plan.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 rounded-full bg-[#1E3A5F] text-white text-sm font-semibold hover:bg-[#162D4A] transition-all shrink-0"
          >
            Talk to us
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Common questions</h2>
          <div className="flex flex-col border-t border-slate-200">
            {faqs.map((item) => (
              <div key={item.q} className="py-6 border-b border-slate-200 max-w-2xl">
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
