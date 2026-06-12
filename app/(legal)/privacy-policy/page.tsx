import type { Metadata } from 'next'
import LegalDoc from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Privacy Policy — Poquito Mahjong',
  description: 'How Poquito Mahjong collects, uses, and protects your personal data.',
}

const LAST_UPDATED = 'June 13, 2026'

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc title="Privacy Policy" lastUpdated={LAST_UPDATED}>

      <Section title="1. Introduction">
        <p>
          Pocket Dragon Studios ("we", "our", or "us") operates the Poquito Mahjong mobile application and this website (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. Please read this policy carefully.
        </p>
        <p>
          By accessing or using the Service, you agree to this Privacy Policy. If you disagree with any part of this policy, please discontinue use of the Service.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <SubSection title="2.1 Information You Provide">
          <ul>
            <li><strong>Account Information:</strong> When you register, we collect your name, email address, username, and password.</li>
            <li><strong>Payment Information:</strong> Subscription payments are processed via third-party payment processors (e.g., Razorpay, App Store, Google Play). We do not store your full card details.</li>
            <li><strong>Communications:</strong> Messages you send to our support team.</li>
            <li><strong>Profile Data:</strong> Avatar, display name, and in-game preferences you set.</li>
          </ul>
        </SubSection>
        <SubSection title="2.2 Information Collected Automatically">
          <ul>
            <li><strong>Game Data:</strong> Match history, ranked points, win/loss records, game duration, tiles played.</li>
            <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, IP address.</li>
            <li><strong>Usage Data:</strong> Features accessed, time spent in-app, session frequency, crash reports.</li>
            <li><strong>Log Data:</strong> Server logs including access times, pages viewed, and error reports.</li>
          </ul>
        </SubSection>
        <SubSection title="2.3 Information from Third Parties">
          <p>If you sign in via Apple, Google, or Facebook, we receive your name, email, and profile picture from those providers, subject to their privacy policies.</p>
        </SubSection>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the collected information to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Process subscription payments and prevent fraud</li>
          <li>Match you with appropriate players via our Ranked and Smart Matchmaking systems</li>
          <li>Maintain game integrity and enforce our Terms of Use</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Send service-related communications (receipts, security alerts, policy updates)</li>
          <li>Analyse usage to improve game features and performance</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We will not sell your personal information to third parties.</p>
      </Section>

      <Section title="4. Sharing Your Information">
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Cloud hosting, analytics, payment processors, and customer support tools operating under strict confidentiality.</li>
          <li><strong>Legal Compliance:</strong> When required by law, court order, or governmental authority.</li>
          <li><strong>Business Transfers:</strong> If Pocket Dragon Studios is acquired or merges with another entity, your information may be transferred as part of that transaction.</li>
          <li><strong>With Your Consent:</strong> Any other sharing we will notify you of and obtain your consent first.</li>
        </ul>
        <p>Public profile information (username, rank, match statistics) is visible to other players within the game.</p>
      </Section>

      <Section title="5. Data Retention">
        <p>We retain your personal data for as long as your account is active or as necessary to provide the Service. Upon account deletion, we delete or anonymise your data within 90 days, except where retention is required by law or for legitimate business purposes (e.g., financial records for 7 years).</p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>Poquito Mahjong is not directed at children under 13 years of age (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us their data, contact us immediately and we will delete it.</p>
      </Section>

      <Section title="7. Your Rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your data ("right to be forgotten")</li>
          <li>Object to or restrict certain processing</li>
          <li>Data portability (receive your data in a structured format)</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:privacy@poquitomahjong.com" className="text-pq-rust hover:underline">privacy@poquitomahjong.com</a>. We will respond within 30 days.</p>
      </Section>

      <Section title="8. Security">
        <p>We implement industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest, and regular security audits. No method of electronic storage is 100% secure; we cannot guarantee absolute security.</p>
      </Section>

      <Section title="9. International Transfers">
        <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses) for transfers outside your jurisdiction.</p>
      </Section>

      <Section title="10. Cookies and Tracking">
        <p>We use cookies and similar tracking technologies on our website. For details, please see our <a href="/cookie-policy" className="text-pq-rust hover:underline">Cookie Policy</a>.</p>
      </Section>

      <Section title="11. Changes to This Policy">
        <p>We may update this Privacy Policy periodically. We will notify you of material changes by email or in-app notification at least 14 days before the change takes effect. Your continued use of the Service after the effective date constitutes acceptance of the updated policy.</p>
      </Section>

      <Section title="12. Contact Us">
        <p>For privacy-related questions or to exercise your rights:</p>
        <ContactBlock />
      </Section>

    </LegalDoc>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-hero font-bold text-pq-green text-xl mb-4 tracking-tight">{title}</h2>
      <div className="flex flex-col gap-3 text-pq-green/70 leading-relaxed text-[0.95rem]">
        {children}
      </div>
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-2">
      <h3 className="font-hero font-bold text-pq-green/80 text-base mb-2">{title}</h3>
      <div className="flex flex-col gap-2 text-pq-green/65 leading-relaxed text-[0.95rem]">
        {children}
      </div>
    </div>
  )
}

function ContactBlock() {
  return (
    <div className="mt-3 p-5 rounded-xl border border-pq-green/10 bg-pq-green/[0.03] text-sm text-pq-green/65 leading-relaxed space-y-1">
      <p><strong className="text-pq-green/80">Pocket Dragon Studios</strong></p>
      <p>Email: <a href="mailto:privacy@poquitomahjong.com" className="text-pq-rust hover:underline">privacy@poquitomahjong.com</a></p>
      <p>Support: <a href="mailto:support@poquitomahjong.com" className="text-pq-rust hover:underline">support@poquitomahjong.com</a></p>
    </div>
  )
}
