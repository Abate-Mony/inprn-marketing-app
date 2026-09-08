export function Logo({ light }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center shrink-0">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="white" />
          <rect x="9.5" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.7" />
          <rect x="1" y="9.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.7" />
          <rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.4" />
        </svg>
      </div>
      <span className={`text-[17px] font-bold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        work<span className={light ? "text-white/50" : "text-slate-400"}>.wrk</span>
      </span>
    </div>
  );
}
