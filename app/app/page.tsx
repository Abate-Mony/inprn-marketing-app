import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Apple, PlayCircle } from "lucide-react";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appUrls";
import { PageHero } from "@/components/marketing/PageHero";

export const metadata: Metadata = {
  title: "Get the app",
  description: "Download the OnClockly app for iOS or Android.",
};

// A single, shareable link (onclockly.com/app) for app-download CTAs — QR
// codes, social bios, SMS invites. Redirects straight to the right store
// based on the request's User-Agent; falls back to a pick-your-platform
// page when the device can't be determined (desktop, bots, unknown UAs).
export default async function AppRedirectPage() {
  const userAgent = (await headers()).get("user-agent") ?? "";

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    redirect(IOS_APP_URL);
  }
  if (/Android/.test(userAgent)) {
    redirect(ANDROID_APP_URL);
  }

  return (
    <>
      <PageHero
        eyebrow="OnClockly app"
        title="Get the app"
        description="We can't tell which store to send you to from here — open this link on your phone, or pick a platform below."
      />
      <section className="py-20 bg-white">
        <div className="max-w-md mx-auto px-6 flex flex-col gap-3">
          <a
            href={IOS_APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 h-16 px-5 rounded-xl border border-slate-200 hover:border-[#1E3A5F]/30 transition-colors"
          >
            <Apple size={26} className="text-slate-900 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-[11px] text-slate-500">Download on the</span>
              <span className="text-base font-semibold text-slate-900">App Store</span>
            </span>
          </a>
          <a
            href={ANDROID_APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 h-16 px-5 rounded-xl border border-slate-200 hover:border-[#1E3A5F]/30 transition-colors"
          >
            <PlayCircle size={26} className="text-slate-900 shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-[11px] text-slate-500">Get it on</span>
              <span className="text-base font-semibold text-slate-900">Google Play</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
