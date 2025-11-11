import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — 621 ARCHIVAL'
}

export default function PrivacyPolicy() {
  return (
    <section className="bg-background py-16">
      <div className="container-grid space-y-4 text-sm uppercase tracking-[0.2em] text-foreground/70">
        <h1 className="font-display text-4xl text-foreground">Privacy</h1>
        <p>We collect only essential data to fulfill orders and never sell personal information.</p>
      </div>
    </section>
  )
}
