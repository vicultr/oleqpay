import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Olefi",
  description: "Terms governing access to Olefi websites, applications, accounts and payment services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-left text-2xl font-semibold tracking-tight">{title}</h2>
    <div className="space-y-3 leading-7 text-gray-600">{children}</div>
  </section>
);

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f5f4ed] px-4 py-14 text-gray-800 sm:px-6 sm:py-20">
      <article className="mx-auto max-w-3xl rounded-3xl border bg-white p-6 shadow-sm sm:p-10 lg:p-12">
        <header className="mb-12 border-b pb-8 text-center">
          <p className="mb-3 font-semibold text-brand-green">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-gray-500">Effective 4 September 2026</p>
        </header>

        <div className="space-y-10">
          <Section title="1. Agreement and scope">
            <p>These terms govern access to Olefi websites, applications, accounts and payment features. By creating an account or using the service, you agree to these terms. If you use Olefi for an organisation, you confirm that you have authority to act for that organisation.</p>
            <p>Specific transactions, payment methods or business services may be subject to additional terms disclosed in the account interface or agreed separately. Those specific terms apply to the relevant service if they conflict with these general terms.</p>
          </Section>

          <Section title="2. Eligibility and accounts">
            <p>You must have legal capacity to enter into these terms and must provide accurate, current information. You are responsible for protecting your password, PIN, one-time codes and devices, and for promptly reporting suspected unauthorised access.</p>
            <p>You must not share credentials in a way that compromises account security or attempt to access another person’s account without authority.</p>
          </Section>

          <Section title="3. Using Olefi">
            <p>You may use Olefi only for lawful purposes and in accordance with applicable laws, payment-network rules and any limits displayed in the service. You are responsible for checking recipient details, amounts and instructions before authorising a transaction.</p>
            <p>You must not use Olefi for fraud, money laundering, prohibited transactions, infringement, harassment, unauthorised system access, malware, interference with the service, or attempts to avoid security, verification or transaction controls.</p>
          </Section>

          <Section title="4. Payments, fees and third-party rails">
            <p>Olefi may rely on mobile-money operators, banks, card networks, mobile-money operators and other payment providers to complete transactions. Processing times and availability can therefore be affected by third-party systems.</p>
            <p>Any applicable amount, fee, exchange information or limit should be shown in the service or agreed with you before the relevant transaction. You are responsible for reviewing those details before confirming.</p>
            <p>A transaction may be delayed, rejected, reversed or placed under review where required for security, compliance, insufficient funds, incorrect details, network rules or technical reasons.</p>
          </Section>

          <Section title="5. Availability and changes">
            <p>Olefi works to keep the service reliable, but continuous or error-free availability is not guaranteed. Maintenance, security events, telecommunications failures and third-party outages may temporarily affect access.</p>
            <p>Features may be changed where reasonably necessary for security, legal compliance, technical operation or product improvement. Material changes to these terms will be posted with an updated effective date.</p>
          </Section>

          <Section title="6. Suspension and closure">
            <p>Access may be restricted or suspended where reasonably necessary to protect users or the service, investigate suspected misuse, comply with law or network requirements, or address unpaid amounts. You may request account assistance or closure by emailing support.</p>
            <p>Account closure does not remove obligations or records that must continue for completed transactions, disputes, fraud prevention, or legal and regulatory requirements.</p>
          </Section>

          <Section title="7. Intellectual property">
            <p>Olefi’s software, design, content, names and marks are owned by or licensed to Olefi or Oleq. These terms give you a limited right to use the service; they do not transfer ownership. You may not copy, reverse engineer, resell or interfere with the service except where applicable law expressly permits it.</p>
          </Section>

          <Section title="8. Responsibility and applicable law">
            <p>Nothing in these terms excludes responsibility that cannot lawfully be excluded. To the extent permitted by law, Olefi is not responsible for losses caused solely by incorrect instructions supplied by a user, unauthorised use resulting from a user’s failure to protect credentials, or failures of external networks outside Olefi’s reasonable control.</p>
            <p>These terms are governed by the applicable laws of Kenya. Any mandatory consumer, privacy or payment rights that apply to you remain unaffected.</p>
          </Section>

          <Section title="9. Complaints and disputes">
            <p>To raise a complaint, email <a href="mailto:support@oleq.co?subject=Olefi%20complaint" className="font-medium text-brand-green underline-offset-4 hover:underline">support@oleq.co</a> with your account details, transaction reference and a clear description of the issue. We will investigate and respond within a reasonable period.</p>
            <p>You retain any right available under applicable law to approach a regulator, ombudsman or court of competent jurisdiction.</p>
          </Section>

          <Section title="10. Privacy">
            <p>Our <a href="/privacy-policy" className="font-medium text-brand-green underline-offset-4 hover:underline">Privacy Policy</a> explains how personal information is collected, used, shared and protected when you use Olefi.</p>
          </Section>

          <Section title="11. Contact">
            <p>Questions, complaints or account issues can be sent to <a href="mailto:support@oleq.co?subject=Olefi%20terms%20or%20account%20question" className="font-medium text-brand-green underline-offset-4 hover:underline">support@oleq.co</a>, raised by telephone at <a href="tel:+254728555585" className="font-medium text-brand-green underline-offset-4 hover:underline">+254 728 555 585</a>, or sent through <a href="https://oleq.co/#contact" className="font-medium text-brand-green underline-offset-4 hover:underline">WhatsApp — @oleq</a>.</p>
          </Section>
        </div>
      </article>
    </main>
  );
}
