import Link from 'next/link'
import { siteSettings } from '../seed/seed'

const primaryLinks = siteSettings.nav ?? [
  { href: '/archive', title: 'Archive' },
  { href: '/shop', title: 'Shop' },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' }
]

const policyLinks = siteSettings.footerLinks ?? [
  { href: '/policies/shipping', title: 'Shipping' },
  { href: '/policies/returns', title: 'Returns' },
  { href: '/policies/privacy', title: 'Privacy' }
]

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background py-10 text-foreground">
      <div className="container-grid flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h2 className="font-display text-3xl">621 ARCHIVAL</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
            Queer-led. Independent. Built to last.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] md:flex-row md:gap-8">
          <div className="flex flex-col gap-2">
            {primaryLinks.map((link) => (
              <Link key={link.href} className="hover:text-accent" href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {policyLinks.map((link) => (
              <Link key={link.href} className="hover:text-accent" href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="container-grid mt-8 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
        © {new Date().getFullYear()} 621 ARCHIVAL — design that cuts clean and lasts.
      </div>
    </footer>
  )
}
