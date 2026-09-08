import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Got a question about work.wrk, a feature request, or a technical problem? Send us a message and we'll get back to you.",
};

const infoCards = [
  {
    icon: <Mail size={18} />,
    title: "Email support",
    desc: "For general enquiries, onboarding help and account issues.",
    value: "support@work.wrk",
    href: "mailto:support@work.wrk",
  },
  {
    icon: <Clock size={18} />,
    title: "Response time",
    desc: "We aim to respond to all messages within 2 business hours during UK working hours (Mon–Fri, 09:00–18:00).",
    value: null,
    href: null,
  },
  {
    icon: <MessageSquare size={18} />,
    title: "In-app help",
    desc: "Signed-in users can access the Help Centre from the sidebar for guides, FAQs and walkthrough articles.",
    value: null,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-[#080F1C]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-5">Contact & Support</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">We&apos;re here to help</h1>
          <p className="text-lg text-white/45 leading-relaxed">
            Got a question about work.wrk, a feature request, or a technical problem? Send us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {infoCards.map((card) => (
                <div key={card.title} className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="w-9 h-9 rounded-xl bg-[#1E3A5F]/8 flex items-center justify-center text-[#1E3A5F] shrink-0">{card.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-1">{card.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-1">{card.desc}</p>
                    {card.href && (
                      <a href={card.href} className="text-sm font-semibold text-[#1E3A5F] hover:underline">
                        {card.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google OAuth note */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Privacy &amp; Google account enquiries</h2>
          <p className="text-slate-500 leading-relaxed text-sm max-w-xl mx-auto">
            For questions about how work.wrk uses Google account information, data deletion requests, or any privacy concern, please email{" "}
            <a href="mailto:privacy@work.wrk" className="text-[#1E3A5F] font-semibold hover:underline">
              privacy@work.wrk
            </a>
            . We respond to all privacy requests within 30 days.
          </p>
        </div>
      </section>
    </>
  );
}
