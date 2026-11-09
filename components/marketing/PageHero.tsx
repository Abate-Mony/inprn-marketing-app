import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
}) {
  return (
    <section className="bg-[#080F1C] pt-36 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/80 mb-5">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-5 max-w-2xl">{title}</h1>
        {description && <p className="text-lg text-white/50 leading-relaxed max-w-xl">{description}</p>}
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
