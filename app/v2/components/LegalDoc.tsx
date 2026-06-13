import Link from 'next/link'

const legalNav = [
  { label: 'Privacy Policy',  href: '/privacy-policy' },
  { label: 'Terms of Use',    href: '/terms-of-use' },
  { label: 'Refund Policy',   href: '/refund-policy' },
  { label: 'Cookie Policy',   href: '/cookie-policy' },
]

export default function LegalDoc({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">

      {/* Sticky sidebar nav */}
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <p className="text-pq-green text-[10px] tracking-[0.18em] uppercase mb-4">Legal</p>
          <nav className="flex flex-col gap-1">
            {legalNav.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                  href.includes(title.toLowerCase().replace(/ /g, '-'))
                    ? 'bg-pq-green/8 text-pq-green'
                    : 'text-pq-green hover:text-pq-green hover:bg-pq-green/5 hover:font-bold hover:scale-[1.03] transition-all duration-200'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content */}
      <article>
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-pq-green/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-pq-rust/60" />
            <span className="text-pq-rust text-xs tracking-[0.2em] uppercase">Legal</span>
          </div>
          <h1
            className="font-hero font-bold text-pq-green leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {title.toUpperCase()}
          </h1>
          <p className="text-pq-green text-sm">Last updated: {lastUpdated}</p>
        </div>

        {/* Mobile legal nav */}
        <div className="lg:hidden flex flex-wrap gap-2 mb-10">
          {legalNav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs px-3 py-1.5 rounded-full border border-pq-green/15 text-pq-green hover:text-pq-green hover:border-pq-green/30 hover:font-bold hover:scale-[1.03] transition-all duration-200 inline-block"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Body */}
        <div className="[&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:pl-5 [&_ol]:space-y-2 [&_a]:underline-offset-2 [&_strong]:text-pq-green [&_strong]:font-normal">
          {children}
        </div>
      </article>
    </div>
  )
}
