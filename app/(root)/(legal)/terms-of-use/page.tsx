import type { Metadata } from 'next'
import LegalDoc from '../../components/LegalDoc'

export const metadata: Metadata = {
  title: 'Terms of Use — Poquito Mahjong',
  description: 'Terms and conditions governing your use of Poquito Mahjong.',
}

const LAST_UPDATED = 'June 13, 2026'

export default function TermsOfUsePage() {
  return (
    <LegalDoc title="Terms of Use" lastUpdated={LAST_UPDATED}>

      <S title="1. Acceptance of Terms">
        <p>By downloading, installing, or using Poquito Mahjong (the "App") or visiting our website, you agree to be bound by these Terms of Use ("Terms"). If you do not agree, do not use the Service. These Terms constitute a legally binding agreement between you and Pocket Dragon Studios.</p>
      </S>

      <S title="2. Eligibility">
        <p>You must be at least 13 years of age to use the Service. By using the Service, you represent that you are at least 13 and that you have the legal capacity to enter into a binding agreement. If you are under 18, you confirm you have parental or guardian consent.</p>
      </S>

      <S title="3. Account Registration">
        <ul>
          <li>You must provide accurate, current, and complete information during registration.</li>
          <li>You are responsible for maintaining the confidentiality of your credentials.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>You must notify us immediately if you suspect unauthorised access to your account.</li>
          <li>One person may not maintain multiple accounts. Duplicate accounts may be terminated.</li>
        </ul>
      </S>

      <S title="4. Subscription and Payments">
        <ul>
          <li><strong>Monthly Plan:</strong> Billed monthly. You may cancel at any time before the next billing date to avoid future charges.</li>
          <li><strong>Annual Plan:</strong> Billed annually. Annual subscriptions are <strong>non-refundable</strong>. Your access and benefits remain active until the end of the subscription term.</li>
          <li>Pricing is subject to change with 30 days' notice.</li>
          <li>Payments are processed via third-party processors (Razorpay, Apple, Google). Their terms govern payment transactions.</li>
          <li>Failure to pay may result in suspension or termination of your subscription.</li>
        </ul>
      </S>

      <S title="5. Licence to Use">
        <p>Subject to these Terms, Pocket Dragon Studios grants you a limited, non-exclusive, non-transferable, revocable licence to download and use the App for your personal, non-commercial entertainment. You may not:</p>
        <ul>
          <li>Copy, modify, or distribute the App or its content</li>
          <li>Reverse-engineer, decompile, or disassemble the App</li>
          <li>Use the App for commercial purposes</li>
          <li>Sub-licence, sell, resell, or transfer the App</li>
          <li>Remove or alter proprietary notices on the App</li>
        </ul>
      </S>

      <S title="6. User Conduct">
        <p>You agree not to:</p>
        <ul>
          <li>Cheat, exploit bugs, use bots, macros, or third-party software to gain an unfair advantage</li>
          <li>Harass, abuse, threaten, or intimidate other players</li>
          <li>Use offensive, discriminatory, or inappropriate usernames or in-game chat</li>
          <li>Intentionally disconnect or forfeit games repeatedly to manipulate rankings</li>
          <li>Attempt to access systems, data, or accounts that are not yours</li>
          <li>Engage in any form of match-fixing or collusion</li>
          <li>Violate any applicable law or regulation</li>
        </ul>
        <p>Violations may result in temporary suspension or permanent termination of your account without refund.</p>
      </S>

      <S title="7. Virtual Items and In-App Content">
        <p>Any virtual items, themes, cosmetics, or other in-app content ("Virtual Content") purchased or earned are licensed to you, not sold. Virtual Content has no real-world monetary value and cannot be transferred, traded, or redeemed for cash. We may modify or remove Virtual Content at any time.</p>
      </S>

      <S title="8. Ranked System and Matchmaking">
        <p>Ranked Points, tiers, and matchmaking are features of the Service provided as-is. We reserve the right to adjust the ranking algorithm, tier thresholds, and matchmaking parameters at any time. Ranked data may be reset at the start of new seasons.</p>
      </S>

      <S title="9. Intellectual Property">
        <p>All content in the Service — including the Poquito Mahjong name, logo, graphics, software, game mechanics, sounds, and text — is owned by Pocket Dragon Studios or its licensors and protected by copyright, trademark, and other intellectual property laws. Your use of the Service does not grant you ownership of any content.</p>
      </S>

      <S title="10. Disclaimer of Warranties">
        <p>The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not warrant that the Service will be uninterrupted, error-free, or meet your specific requirements. To the fullest extent permitted by law, we disclaim all warranties, express or implied.</p>
      </S>

      <S title="11. Limitation of Liability">
        <p>To the maximum extent permitted by applicable law, Pocket Dragon Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
      </S>

      <S title="12. Termination">
        <p>We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. You may delete your account at any time through the app settings. Upon termination, your licence to use the Service ends immediately.</p>
      </S>

      <S title="13. Governing Law">
        <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>
      </S>

      <S title="14. Changes to Terms">
        <p>We may update these Terms at any time. We will notify you via email or in-app notification of material changes at least 14 days before they take effect. Continued use of the Service after the effective date constitutes acceptance.</p>
      </S>

      <S title="15. Contact">
        <p>Questions about these Terms: <a href="mailto:legal@poquitomahjong.com" className="text-pq-rust hover:underline">legal@poquitomahjong.com</a></p>
      </S>

    </LegalDoc>
  )
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-hero font-bold text-pq-green text-xl mb-4 tracking-tight">{title}</h2>
      <div className="flex flex-col gap-3 text-pq-green/70 leading-relaxed text-[0.95rem]">{children}</div>
    </section>
  )
}
