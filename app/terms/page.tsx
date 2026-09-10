import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the INPRN platform.",
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">{children}</p>;
}

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-xl font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">{title}</h2>
      {children}
    </div>
  );
}

function PH({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded text-[13px] font-medium">[{children}]</span>
  );
}

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of terms" },
  { id: "service", title: "2. Description of service" },
  { id: "accounts", title: "3. Accounts" },
  { id: "acceptable", title: "4. Acceptable use" },
  { id: "data", title: "5. Your data" },
  { id: "availability", title: "6. Availability" },
  { id: "liability", title: "7. Limitation of liability" },
  { id: "changes", title: "8. Changes to these terms" },
  { id: "contact", title: "9. Contact" },
];

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-12 bg-[#080F1C]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/45">
            Last updated: <PH>DATE</PH>
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Contents</p>
              <nav className="flex flex-col gap-1" aria-label="Terms of service sections">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-sm text-slate-500 hover:text-[#1E3A5F] py-1.5 transition-colors">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <DocSection id="acceptance" title="1. Acceptance of terms">
              <P>
                By accessing or using the INPRN platform (the &quot;<strong className="text-slate-800">Service</strong>&quot;), you agree to be
                bound by these Terms of Service. If you do not agree, do not use the Service.
              </P>
              <P>
                The Service is operated by <PH>Company Legal Name</PH> (&quot;<strong className="text-slate-800">INPRN</strong>&quot;). These
                Terms constitute a legal agreement between you and INPRN.
              </P>
            </DocSection>

            <DocSection id="service" title="2. Description of service">
              <P>
                INPRN is a workforce management platform that enables companies and their managers to schedule shifts, track attendance, manage
                timesheets and coordinate their workforce. Workers use the Service to view schedules, clock in and out and manage their own
                records.
              </P>
            </DocSection>

            <DocSection id="accounts" title="3. Accounts">
              <P>
                You must create an account to use the Service. You are responsible for maintaining the security of your account credentials and
                for all activity that occurs under your account.
              </P>
              <P>
                Accounts may not be shared between individuals. Each user must have their own account. You must be at least{" "}
                <PH>minimum age, e.g. 16</PH> years old to use the Service.
              </P>
              <P>You must provide accurate, current and complete information when creating your account and keep it up to date.</P>
            </DocSection>

            <DocSection id="acceptable" title="4. Acceptable use">
              <P>You agree not to:</P>
              <ul className="flex flex-col gap-2 mb-4 pl-4">
                {[
                  "Use the Service to falsify attendance records or clock-in data",
                  "Share your account credentials with others",
                  "Attempt to access data belonging to other organisations",
                  "Use the Service in any way that violates applicable laws",
                  "Introduce malware or attempt to interfere with the platform",
                  "Scrape or bulk-extract data without our written permission",
                ].map((item) => (
                  <li key={item} className="text-[15px] text-slate-600 flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="data" title="5. Your data">
              <P>
                You retain ownership of the data you submit to the Service. By submitting data, you grant INPRN a limited licence to store and
                process that data in order to provide the Service.
              </P>
              <P>You may export your data at any time. On account deletion, your data will be handled as described in our Privacy Policy.</P>
            </DocSection>

            <DocSection id="availability" title="6. Availability">
              <P>
                We aim to keep the Service available but do not guarantee uninterrupted availability. We may carry out maintenance, introduce
                changes or discontinue features with reasonable notice where possible.
              </P>
              <P>
                The Service is provided &quot;as is&quot;. INPRN makes no warranties, express or implied, about the Service&apos;s fitness for a
                particular purpose.
              </P>
            </DocSection>

            <DocSection id="liability" title="7. Limitation of liability">
              <P>
                To the maximum extent permitted by law, INPRN shall not be liable for any indirect, incidental, special or consequential damages
                arising out of your use of the Service, including loss of data, lost revenue or reputational harm.
              </P>
              <P>
                Our total liability for any claim arising from your use of the Service shall not exceed the amount you paid us in the 12 months
                prior to the claim arising.
              </P>
            </DocSection>

            <DocSection id="changes" title="8. Changes to these terms">
              <P>
                We may update these Terms from time to time. We will notify you of material changes by email or via a notice in the platform.
                Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
              </P>
            </DocSection>

            <DocSection id="contact" title="9. Contact">
              <P>If you have questions about these Terms, contact us at:</P>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-600 flex flex-col gap-2">
                <p>
                  <strong className="text-slate-800">Email:</strong> <PH>legal@yourdomain.com</PH>
                </p>
                <p>
                  <strong className="text-slate-800">Company:</strong> <PH>Company Legal Name</PH>
                </p>
                <p>
                  <strong className="text-slate-800">Address:</strong> <PH>Registered address</PH>
                </p>
              </div>
            </DocSection>
          </main>
        </div>
      </div>
    </>
  );
}
