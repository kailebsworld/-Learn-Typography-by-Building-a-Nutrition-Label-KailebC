import type { Metadata } from 'next'
import { AnnouncementBar } from '../../components/announcement-bar'
import { CartProvider } from '../../components/cart-provider'
import { CartDrawer } from '../../components/cart-drawer'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { siteSettings } from '../../seed/seed'

export const metadata: Metadata = {
  title: '621 ARCHIVAL — design that cuts clean and lasts.',
  description: 'Pieces from the archive. Pieces for the street.'
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const announcement = siteSettings.announcement

  return (
    <CartProvider>
      <AnnouncementBar enabled={announcement?.enabled} text={announcement?.text} url={announcement?.url} />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
