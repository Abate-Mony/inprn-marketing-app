"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { TIMESHIFT_LOGIN_URL, TIMESHIFT_SIGNUP_URL } from "@/lib/timeshift";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function MarketingHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHero ? "bg-transparent" : "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[66px]">
        <Link href="/" aria-label="work.wrk home">
          <Logo light={isHero} />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isHero
                    ? "text-white/75 hover:text-white"
                    : active
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={TIMESHIFT_LOGIN_URL}
            className={`text-sm font-medium transition-colors ${
              isHero ? "text-white/75 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Sign in
          </a>
          <a
            href={TIMESHIFT_SIGNUP_URL}
            className={`h-9 px-5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] inline-flex items-center ${
              isHero
                ? "bg-white text-[#0B1628] hover:bg-white/90 shadow-lg shadow-black/20"
                : "bg-[#1E3A5F] text-white hover:bg-[#162D4A]"
            }`}
          >
            Get started free
          </a>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isHero ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden bg-white border-t border-slate-200 px-6 py-5 flex flex-col gap-1 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMobileMenu}
              aria-current={pathname === l.href ? "page" : undefined}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 text-left py-2.5 border-b border-slate-100 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <a
              href={TIMESHIFT_LOGIN_URL}
              onClick={closeMobileMenu}
              className="h-10 flex items-center justify-center text-sm font-medium text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50"
            >
              Sign in
            </a>
            <a
              href={TIMESHIFT_SIGNUP_URL}
              onClick={closeMobileMenu}
              className="h-10 flex items-center justify-center text-sm font-semibold text-white bg-[#1E3A5F] rounded-xl hover:bg-[#162D4A]"
            >
              Get started free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
