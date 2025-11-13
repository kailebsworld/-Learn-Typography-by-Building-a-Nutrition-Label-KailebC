'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { useCart } from './cart-provider'
import { cn } from '../utils/cn'
import { siteSettings } from '../seed/seed'

const navLinks = siteSettings.nav ?? [
  { href: '/archive', title: 'Archive' },
  { href: '/shop', title: 'Shop' },
  { href: '/about', title: 'About' }
]

export function Header() {
  const pathname = usePathname()
  const { state, dispatch } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="container-grid flex items-center justify-between py-6">
        <Link className="font-display text-xl tracking-tight" href="/">
          621 ARCHIVAL
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={cn(
                'text-sm uppercase tracking-[0.2em] transition-colors',
                pathname?.startsWith(link.href) ? 'text-foreground' : 'text-foreground/60'
              )}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            aria-label="Open cart"
            className="relative rounded-full border border-foreground/20 px-4"
            size="sm"
            variant="ghost"
            onClick={() => dispatch({ type: 'TOGGLE', value: true })}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">View cart</span>
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-medium text-background">
              {state.items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-background" side="left">
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="text-lg uppercase tracking-[0.2em]"
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
