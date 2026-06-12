import type { Metadata } from 'next'
import LegalDoc from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Refund Policy — Poquito Mahjong',
  description: 'Poquito Mahjong subscription refund and cancellation policy.',
}

export default function RefundPolicyPage() {
  return (
    <LegalDoc title="Refund Policy" lastUpdated="June 13, 2026">

      <S title="Overview">
        <p>We want you to be delighted with Poquito Mahjong. This Refund Policy outlines the conditions under which refunds are available for subscription purchases.</p>
      </S>

      <S title="Monthly Subscriptions">
        <p>Monthly subscription charges are <strong>non-refundable</strong> once the billing period has begun. You may cancel your monthly subscription at any time, and your access will continue until the end of the current billing period. You will not be charged for subsequent months after cancellation.</p>
        <p>To cancel, go to <em>Settings → Subscription → Cancel Plan</em> in the app, or manage your subscription via the App Store or Google Play.</p>
      </S>

      <S title="Annual Subscriptions">
        <p>Annual subscriptions are <strong>non-refundable</strong>. When you purchase an annual plan:</p>
        <ul>
          <li>Your subscription benefits remain fully active for the entire 12-month term.</li>
          <li>No partial refunds are issued for unused months.</li>
          <li>Cancellation stops auto-renewal but does not trigger a refund.</li>
        </ul>
        <p>Please carefully review the annual plan details before purchasing.</p>
      </S>

      <S title="Exceptional Circumstances">
        <p>We consider refund requests on a case-by-case basis in exceptional circumstances, including:</p>
        <ul>
          <li>Technical failure that prevents access to the Service for an extended period caused by us (not your device or network).</li>
          <li>Unauthorised charges — if your account was compromised and a purchase made without your consent, contact us immediately.</li>
          <li>Duplicate charges caused by a billing error.</li>
        </ul>
        <p>Refunds for exceptional circumstances must be requested within <strong>14 days</strong> of the charge. Contact us at <a href="mailto:support@poquitomahjong.com" className="text-pq-rust hover:underline">support@poquitomahjong.com</a> with your order details.</p>
      </S>

      <S title="App Store and Google Play Purchases">
        <p>Purchases made through the Apple App Store or Google Play Store are subject to those platforms' refund policies. Please contact Apple or Google directly for refund requests on in-app purchases made through their stores.</p>
      </S>

      <S title="How to Request a Refund">
        <ol className="list-decimal list-inside space-y-2">
          <li>Email <a href="mailto:support@poquitomahjong.com" className="text-pq-rust hover:underline">support@poquitomahjong.com</a></li>
          <li>Include: your registered email, order/transaction ID, date of purchase, and reason for request</li>
          <li>We will respond within 5 business days</li>
          <li>Approved refunds are processed within 7–14 business days to the original payment method</li>
        </ol>
      </S>

      <S title="Contact">
        <p>Questions about refunds: <a href="mailto:support@poquitomahjong.com" className="text-pq-rust hover:underline">support@poquitomahjong.com</a></p>
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
