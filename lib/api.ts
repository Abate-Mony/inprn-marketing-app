// Server-side only — fetched from a Server Component (pricing/page.tsx), so
// this is a plain Node fetch to the backend, never a browser request. CORS
// doesn't apply and no API key/session is needed: GET /plans is a public,
// unauthenticated endpoint that returns the same static catalog every
// visitor sees.
const API_URL = process.env.API_URL ?? "http://146.190.212.190:5000/api/v1";

export interface PlanCatalogEntry {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  annualMonthly: number | null;
  ctaLabel: string;
  highlighted: boolean;
  features: string[];
  notIncluded?: string[];
}

// Pulls from PLAN_LIMITS (what's actually enforced) via the backend's public
// GET /plans endpoint, instead of a hand-maintained copy of prices/features
// here — this app already had a real bug once from that kind of drift (see
// the comment on PLAN_CATALOG in time_sheet_server/src/utils/constant.ts).
export async function getPlanCatalog(): Promise<PlanCatalogEntry[] | null> {
  try {
    const res = await fetch(`${API_URL}/plans`, {
      // Pricing rarely changes; avoids hitting the backend on every page view.
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.plans ?? null;
  } catch {
    return null;
  }
}
