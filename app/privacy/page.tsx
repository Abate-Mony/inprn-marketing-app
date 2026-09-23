import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How INPRN collects, uses, shares and protects your personal data.",
};

const SECTIONS = [
  { id: "overview", title: "1. Overview" },
  { id: "information", title: "2. Information we collect" },
  { id: "google", title: "3. Google sign-in" },
  { id: "how-we-use", title: "4. How we use your data" },
  { id: "sharing", title: "5. Data sharing" },
  { id: "retention", title: "6. Retention & deletion" },
  { id: "security", title: "7. Security" },
  { id: "rights", title: "8. Your rights" },
  { id: "cookies", title: "9. Cookies" },
  { id: "contact", title: "10. Contact us" },
];

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-100">{title}</h2>
      <div className="prose-custom">{children}</div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 mb-4 pl-4">
      {items.map((item) => (
        <li key={item} className="text-[15px] text-slate-600 leading-relaxed flex items-start gap-2">
          <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// function Placeholder({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded text-[13px] font-medium">[{children}]</span>
//   );
// }

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12 bg-[#080F1C]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-4">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/45">
            Last updated: 24/09/2026
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Contents</p>
              <nav className="flex flex-col gap-1" aria-label="Privacy policy sections">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="text-sm text-slate-500 hover:text-[#1E3A5F] py-1.5 transition-colors leading-snug">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document */}
          <main className="lg:col-span-3">
            <DocSection id="overview" title="1. Overview">
              <P>
                INPRN (&quot;<strong className="text-slate-800">INPRN</strong>&quot;, &quot;<strong className="text-slate-800">we</strong>
                &quot;, &quot;<strong className="text-slate-800">us</strong>&quot; or &quot;<strong className="text-slate-800">our</strong>&quot;)
                is a workforce management and timesheet platform operated by <a href="www.innoprosolution.com">InnoProsolutions</a>, registered at{" "}
               Kensington Way
              </P>
              <P>
                This Privacy Policy explains what personal data INPRN collects, why we collect it, how we use it and your rights in relation to
                it. It applies to all users of the INPRN platform — including managers, administrators and workers.
              </P>
              <P>
                By using INPRN you agree to the collection and use of your data as described in this policy. If you do not agree, please do not
                use the platform.
              </P>
            </DocSection>

            <DocSection id="information" title="2. Information we collect">
              <P>We collect the following categories of personal data:</P>
              <p className="text-sm font-semibold text-slate-800 mb-2">Account information</p>
              <UL
                items={[
                  "Name and email address",
                  "Password (stored as a one-way hash — never in plain text)",
                  "Company name and role (manager or worker)",
                  "Phone number, if provided",
                ]}
              />
              <p className="text-sm font-semibold text-slate-800 mb-2">Work records</p>
              <UL
                items={[
                  "Clock-in and clock-out times",
                  "Break start and end times",
                  "Jobs you are assigned to",
                  "GPS location at the moment of clock-in and clock-out (not continuously tracked)",
                  "Hours worked and timesheet data",
                ]}
              />
              <p className="text-sm font-semibold text-slate-800 mb-2">Usage data</p>
              <UL
                items={[
                  "IP address and approximate location derived from IP",
                  "Device type and operating system",
                  "Pages accessed within the platform",
                  "Actions taken within the platform (e.g. job created, timesheet approved)",
                ]}
              />
            </DocSection>

            <DocSection id="google" title="3. Google sign-in">
              <P>INPRN offers &quot;Sign in with Google&quot; as an alternative to email and password login. When you choose to sign in with Google:</P>
              <UL
                items={[
                  "We receive your Google account's name, email address and profile picture from Google's identity service.",
                  "We do not receive access to your Google Drive, Gmail, Calendar or any other Google services.",
                  "We use this information only to create and authenticate your INPRN account.",
                  "We do not sell, rent or share your Google account data with third parties for advertising or marketing purposes.",
                ]}
              />
              <P>
                The use of information received from Google APIs will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener"
                  className="text-[#1E3A5F] underline"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </P>
              <P>
                You may disconnect Google sign-in at any time by visiting your account settings or by contacting{" "}
               support@inprn.com.
              </P>
            </DocSection>

            <DocSection id="how-we-use" title="4. How we use your data">
              <P>We use your data to:</P>
              <UL
                items={[
                  "Create and manage your account",
                  "Assign you to jobs and shifts (workers) or allow you to create and manage them (managers)",
                  "Record your attendance — clock-in and clock-out times — and generate accurate timesheets",
                  "Verify that you are at the correct site location at the point of clock-in",
                  "Send notifications about job assignments, shift changes or timesheet approvals",
                  "Generate reports for managers and payroll processing",
                  "Maintain the security and integrity of the platform",
                  "Respond to support enquiries",
                  "Comply with legal obligations",
                ]}
              />
              <P>We do not use your data for advertising or sell it to third parties.</P>
            </DocSection>

            <DocSection id="sharing" title="5. Data sharing">
              <P>We share data in the following limited circumstances:</P>
              <UL
                items={[
                  "With your company's managers and administrators — for the purpose of scheduling, attendance verification and payroll.",
                  "With infrastructure providers (e.g. hosting, database) under strict data processing agreements.",
                  "With law enforcement or regulatory authorities where required by applicable law.",
                  "In the event of a business sale or merger — you will be notified before any transfer occurs.",
                ]}
              />
              <P>We do not share your data with advertisers, data brokers or third-party analytics services beyond what is described here.</P>
            </DocSection>

            <DocSection id="retention" title="6. Retention and deletion">
              <P>
                We retain your personal data for as long as your account is active or as needed to provide the service. Work records (timesheets,
                clock-in data) are retained for retention period, e.g. 7 years to comply with employment and tax
                record-keeping obligations.
              </P>
              <P>
                When you delete your account, we will delete or anonymise your personal data within e.g. 30 days, except
                where we are required to retain records by law.
              </P>
              <P>
                To request account deletion, email deletion request email or use the account settings page.
              </P>
            </DocSection>

            <DocSection id="security" title="7. Security">
              <P>We use industry-standard security measures to protect your data:</P>
              <UL
                items={[
                  "All data is transmitted over HTTPS (TLS encryption)",
                  "Passwords are hashed using a strong one-way algorithm and are never stored in plain text",
                  "Access to production data is restricted to authorised personnel only",
                  "We regularly review our security practices",
                ]}
              />
              <P>
                No system is completely secure. If you suspect unauthorised access to your account, please contact us immediately at{" "}
                security@inprn.com.
              </P>
            </DocSection>

            <DocSection id="rights" title="8. Your rights">
              <P>Depending on your jurisdiction, you may have the following rights regarding your personal data:</P>
              <UL
                items={[
                  "Access — request a copy of the data we hold about you",
                  "Rectification — ask us to correct inaccurate data",
                  "Erasure — request deletion of your data (subject to legal retention obligations)",
                  "Portability — receive your data in a machine-readable format",
                  "Objection — object to certain processing of your data",
                  "Withdraw consent — where processing is based on consent",
                ]}
              />
              <P>
                To exercise any of these rights, contact us at privacy@inprn.com. We will respond within 30 days.
              </P>
            </DocSection>

            <DocSection id="cookies" title="9. Cookies">
              <P>INPRN uses cookies and similar technologies to:</P>
              <UL items={["Maintain your login session", "Remember your preferences", "Measure how the platform is used (analytics)"]} />
              <P>You can control cookies through your browser settings. Disabling cookies may affect your ability to log in or use certain features.</P>
              <P>We do not use cookies for third-party advertising.</P>
            </DocSection>

            <DocSection id="contact" title="10. Contact us">
              <P>For any privacy-related questions, requests or concerns, please contact us:</P>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-600 flex flex-col gap-2">
                <p>
                  <strong className="text-slate-800">Email:</strong> mail@yourdomain.com
                </p>
                <p>
                  <strong className="text-slate-800">Company:</strong> InPerson 
                </p>
                <p>
                  <strong className="text-slate-800">Address:</strong> Kensington Way Chippenham
                </p>
              </div>
              <P>If you are not satisfied with our response, you may have the right to complain to your local data protection authority.</P>
            </DocSection>
          </main>
        </div>
      </div>
    </>
  );
}
