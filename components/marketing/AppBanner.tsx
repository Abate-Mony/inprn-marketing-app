"use client";

import { useState, useSyncExternalStore } from "react";
import { Smartphone, X } from "lucide-react";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/lib/appUrls";

const DISMISS_KEY = "onclockly-app-banner-dismissed";

type Platform = "ios" | "android" | null;

// Nothing external ever changes this after initial load, so there's nothing
// to subscribe to — this just satisfies useSyncExternalStore's API shape.
function subscribe() {
  return () => {};
}

function getSnapshot(): Platform {
  if (window.localStorage.getItem(DISMISS_KEY) === "1") return null;
  const ua = window.navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return null;
}

function getServerSnapshot(): Platform {
  return null;
}

export function AppBanner() {
  const detected = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !detected) return null;

  const platform = detected;
  const storeUrl = platform === "ios" ? IOS_APP_URL : ANDROID_APP_URL;
  const storeName = platform === "ios" ? "the App Store" : "Google Play";

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div className="flex items-center gap-3 bg-white border-b border-slate-200 px-4 py-2.5">
      <div className="w-9 h-9 rounded-xl bg-[#1E3A5F] flex items-center justify-center shrink-0">
        <Smartphone size={16} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">Get the OnClockly app</p>
        <p className="text-xs text-slate-500 truncate">Clock in and manage shifts on the go — on {storeName}</p>
      </div>
      <a
        href={storeUrl}
        target="_blank"
        rel="noreferrer"
        className="h-8 px-4 rounded-full bg-[#1E3A5F] text-white text-xs font-bold shrink-0 inline-flex items-center"
      >
        Get
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss app banner"
        className="p-1.5 -mr-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 shrink-0 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
