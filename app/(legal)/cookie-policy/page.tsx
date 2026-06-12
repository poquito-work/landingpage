import type { Metadata } from 'next'
import LegalDoc from '@/components/LegalDoc'

export const metadata: Metadata = {
  title: 'Cookie Policy — Poquito Mahjong',
  description: 'How Poquito Mahjong uses cookies and tracking technologies.',
}

export default function CookiePolicyPage() {
  return (
    <LegalDoc title="Cookie Policy" lastUpdated="June 13, 2026">

      <S title="What Are Cookies?">
        <p>Cookies are small text files stored on your device by a website. They are widely used to make websites work efficiently and to provide information to website owners.</p>
      </S>

      <S title="How We Use Cookies">
        <p>Poquito Mahjong's website uses the following categories of cookies:</p>

        <CookieTable rows={[
          { type: 'Essential', purpose: 'Required for the website to function. Includes session authentication, security tokens, and load balancing.', canOpt: 'No' },
          { type: 'Analytics', purpose: 'Help us understand how visitors interact with the site (pages visited, time on page, error reports). We use anonymised data only.', canOpt: 'Yes' },
          { type: 'Performance', purpose: 'Cache static assets and measure page load performance to improve speed.', canOpt: 'Yes' },
          { type: 'Preferences', purpose: 'Remember your settings such as language and display preferences.', canOpt: 'Yes' },
        ]} />
      </S>

      <S title="Third-Party Cookies">
        <p>We may use third-party services that set their own cookies:</p>
        <ul>
          <li><strong>Analytics:</strong> Aggregated, anonymised usage analytics</li>
          <li><strong>Payment Processors:</strong> Razorpay, Apple, and Google may set cookies during checkout flows</li>
          <li><strong>Customer Support:</strong> Chat or ticketing tools may use session cookies</li>
        </ul>
        <p>We do not use advertising or retargeting cookies.</p>
      </S>

      <S title="Managing Cookies">
        <p>You can control cookies through:</p>
        <ul>
          <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies via their privacy settings.</li>
          <li><strong>Our Cookie Banner:</strong> On your first visit, you can accept or decline non-essential cookies.</li>
          <li><strong>Opt-Out Links:</strong> For analytics services, you may opt out directly via their opt-out tools.</li>
        </ul>
        <p>Note: Blocking essential cookies may prevent the website from functioning properly.</p>
      </S>

      <S title="Mobile App Tracking">
        <p>The Poquito Mahjong mobile app does not use browser cookies. It uses device identifiers and app analytics SDKs subject to your device's privacy settings (iOS App Tracking Transparency / Android privacy controls). You can manage these in your device settings.</p>
      </S>

      <S title="Updates to This Policy">
        <p>We may update this Cookie Policy periodically. Changes will be reflected on this page with an updated date.</p>
      </S>

      <S title="Contact">
        <p>Questions: <a href="mailto:privacy@poquitomahjong.com" className="text-pq-rust hover:underline">privacy@poquitomahjong.com</a></p>
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

function CookieTable({ rows }: { rows: { type: string; purpose: string; canOpt: string }[] }) {
  return (
    <div className="mt-2 overflow-x-auto rounded-xl border border-pq-green/10">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'rgba(20,51,34,0.05)' }}>
            <th className="text-left px-4 py-3 text-pq-green/60 text-xs tracking-[0.1em] uppercase font-normal w-32">Type</th>
            <th className="text-left px-4 py-3 text-pq-green/60 text-xs tracking-[0.1em] uppercase font-normal">Purpose</th>
            <th className="text-left px-4 py-3 text-pq-green/60 text-xs tracking-[0.1em] uppercase font-normal w-24">Opt-Out</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.type} style={{ borderTop: '1px solid rgba(20,51,34,0.06)', background: i % 2 === 0 ? 'transparent' : 'rgba(20,51,34,0.02)' }}>
              <td className="px-4 py-3 text-pq-green font-normal text-sm align-top">{row.type}</td>
              <td className="px-4 py-3 text-pq-green/65 align-top">{row.purpose}</td>
              <td className="px-4 py-3 align-top">
                <span className={`text-xs px-2 py-0.5 rounded-full ${row.canOpt === 'Yes' ? 'bg-pq-rust/10 text-pq-rust' : 'bg-pq-green/8 text-pq-green/50'}`}>
                  {row.canOpt}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
