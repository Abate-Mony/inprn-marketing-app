"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const SUPPORT_EMAIL = "support@inprn.com";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  // There is no backend/API for this form yet. Submitting opens the visitor's
  // email client with the message prefilled, instead of faking a delivered submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = form.subject || "Contact from INPRN website";
    const body = `Name: ${form.name}\nEmail: ${form.email}${form.subject ? `\nTopic: ${form.subject}` : ""}\n\n${form.message}`;
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-emerald-50 rounded-2xl border border-emerald-200">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={24} className="text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Your email app should now open</h3>
        <p className="text-slate-500 max-w-sm leading-relaxed">
          We&apos;ve prefilled a message to {SUPPORT_EMAIL} — just hit send from there. If nothing opened, email us directly at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[#1E3A5F] hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ name: "", email: "", subject: "", message: "" });
          }}
          className="mt-7 h-9 px-5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-slate-50 rounded-2xl border border-slate-200 p-7">
      <h2 className="text-lg font-bold text-slate-900">Send us a message</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
            Name *
          </label>
          <input
            id="contact-name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            className="h-10 px-3.5 border border-slate-200 rounded-xl text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/50 transition-all"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="contact-email"
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="you@company.com"
            className="h-10 px-3.5 border border-slate-200 rounded-xl text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/50 transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">
          Subject
        </label>
        <select
          id="contact-subject"
          value={form.subject}
          onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
          className="h-10 px-3.5 border border-slate-200 rounded-xl text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/50 transition-all appearance-none cursor-pointer"
        >
          <option value="">Select a topic…</option>
          <option>General enquiry</option>
          <option>Technical support</option>
          <option>Account or billing</option>
          <option>Feature request</option>
          <option>Partnership or press</option>
          <option>Privacy or data request</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us how we can help…"
          className="px-3.5 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F]/50 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        className="h-11 rounded-xl bg-[#1E3A5F] text-white text-sm font-semibold hover:bg-[#162D4A] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
      >
        Send message
      </button>
      <p className="text-xs text-slate-400 text-center">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="text-[#1E3A5F] underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
