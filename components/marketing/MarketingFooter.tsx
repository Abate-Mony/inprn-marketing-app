import Link from "next/link";
import { Apple } from "lucide-react";
import { Logo } from "./Logo";
import { IOS_APP_URL, LOGIN_URL, SIGNUP_URL } from "@/lib/appUrls";

const columns = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "API Docs", href: "/docs" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Contact & Support", href: "/contact" },
      { label: "Sign in", href: LOGIN_URL },
      { label: "Get started", href: SIGNUP_URL },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

function isExternal(href: string) {
  return href.startsWith("http");
}

export function MarketingFooter() {
  return (
    <footer className="bg-[#080F1C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-3">
            <Logo light />
            <p className="text-sm text-white/45 leading-relaxed mt-4 max-w-xs">
              Workforce management, timesheets and client invoicing for security, cleaning, events and other shift-based operational teams.
            </p>
            <p className="text-xs text-white/25 mt-6">© 2026 OnClockly. All rights reserved.</p>
            {/* Android is still in closed testing (not public yet) — see
                lib/appUrls.ts's ANDROID_APP_URL, add its badge once promoted. */}
            <a
              href={IOS_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 h-11 px-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Apple size={22} className="text-white shrink-0" />
              <span className="flex flex-col leading-none">
                <span className="text-[9px] text-white/50">Download on the</span>
                <span className="text-sm font-semibold text-white">App Store</span>
              </span>
            </a>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-5">{col.title}</h4>
              <div className="flex flex-col gap-3.5">
                {col.items.map((item) =>
                  isExternal(item.href) ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-white/55 hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            OnClockly is a workforce management platform. Not affiliated with any other service.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
