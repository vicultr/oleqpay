import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Olefi",
  description: "How Olefi handles personal information across its website, applications and payment services.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-left text-2xl font-semibold tracking-tight">{title}</h2>
    <div className="space-y-3 leading-7 text-gray-600">{children}</div>
  </section>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ed] px-4 py-14 text-gray-800 sm:px-6 sm:py-20">
      <article className="mx-auto max-w-3xl rounded-3xl border bg-white p-6 shadow-sm sm:p-10 lg:p-12">
        <header className="mb-12 border-b pb-8 text-center">
          <p className="mb-3 font-semibold text-brand-green">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Effective 4 September 2026</p>
        </header>

        <div className="space-y-10">
          <Section title="1. Scope">
            <p>This policy explains how Olefi handles personal information when you visit this website, create or use an Olefi account, use an Olefi application, make or receive payments, or contact support.</p>
          </Section>

          <Section title="2. Information we handle">
            <p>Depending on how you use Olefi, information may include your name, email address, telephone number, account details, identity or verification information requested during onboarding, payment instructions, transaction records, beneficiary information and communications with support.</p>
            <p>We may also receive technical information such as IP address, browser or device type, operating system, application events, timestamps and security logs when you access the website or service.</p>
          </Section>

          <Section title="3. Why we use information">
            <p>We use relevant information to create and secure accounts; provide payment and account features; process instructions; verify identity where required; prevent fraud, misuse and security incidents; provide support; maintain records; improve reliability; and comply with applicable legal or regulatory duties.</p>
          </Section>

          <Section title="4. When information may be shared">
            <p>Information may be shared only as needed with service providers that support hosting, communications, security or customer support; payment partners involved in completing a transaction; professional advisers; and public authorities where disclosure is legally required. A corporate reorganisation may also require information to transfer subject to appropriate safeguards.</p>
          </Section>

          <Section title="5. Security and retention">
            <p>Olefi uses administrative, technical and organisational measures intended to protect personal information. No internet or storage system can be guaranteed to be completely secure.</p>
            <p>Information is retained only for as long as reasonably needed for the purpose for which it was collected and for applicable legal, regulatory, tax, accounting, fraud-prevention or reporting requirements. Different records may therefore have different retention periods.</p>
          </Section>

          <Section title="6. International processing">
            <p>Olefi and its service providers may process personal information outside the country where it was collected. Where information is transferred across borders, we use safeguards required by applicable law, such as contractual protections, approved transfer mechanisms and appropriate security controls.</p>
          </Section>

          <Section title="7. Cookies and similar technologies">
            <p>Olefi may use cookies, local storage and similar technologies to keep you signed in, remember preferences, protect accounts, understand use of the service and improve performance. You can control cookies through your browser, but blocking essential technologies may prevent parts of the service from working correctly.</p>
          </Section>

          <Section title="8. Your choices and rights">
            <p>Subject to applicable law, including Kenya&apos;s Data Protection Act, 2019, you may ask to be informed about the use of your data; access, correct or delete personal information; object to or restrict certain processing; request data portability; or withdraw consent where processing relies on consent. Some information may need to be retained where the law requires it or where it is necessary to establish or defend legal claims.</p>
            <p>Send a request from the email associated with your account to <a href="mailto:support@oleq.co?subject=Olefi%20privacy%20request" className="font-medium text-brand-green underline-offset-4 hover:underline">support@oleq.co</a>. Olefi may need to verify your identity before completing a request. You may also complain to Kenya&apos;s Office of the Data Protection Commissioner or another competent privacy regulator.</p>
          </Section>

          <Section title="9. External services">
            <p>This website links to the Apple App Store, Google Play and other external services. Their privacy practices are governed by their own policies, not this one.</p>
          </Section>

          <Section title="10. Changes and contact">
            <p>This policy may be updated when the service or applicable requirements change. The effective date above shows when this version took effect.</p>
            <p>Questions or privacy requests can be sent to <a href="mailto:support@oleq.co" className="font-medium text-brand-green underline-offset-4 hover:underline">support@oleq.co</a>, raised by telephone at <a href="tel:+254728555585" className="font-medium text-brand-green underline-offset-4 hover:underline">+254 728 555 585</a>, or sent through <a href="https://oleq.co/#contact" className="font-medium text-brand-green underline-offset-4 hover:underline">WhatsApp — @oleq</a>. See our <a href="/terms-of-service" className="font-medium text-brand-green underline-offset-4 hover:underline">Terms of Service</a> for the rules governing use of Olefi.</p>
          </Section>
        </div>
      </article>
    </main>
  );
}
