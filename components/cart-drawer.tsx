'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { formatPrice } from '../lib/format'
import { Sheet, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { useCart } from './cart-provider'

export function CartDrawer() {
  const { state, dispatch } = useCart()
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  useEffect(() => {
    if (!state.isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch({ type: 'TOGGLE', value: false })
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [state.isOpen, dispatch])

  return (
    <Sheet open={state.isOpen} onOpenChange={(open) => dispatch({ type: 'TOGGLE', value: open })}>
      <SheetContent className="flex h-full max-w-md flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl">Cart</h2>
          <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'TOGGLE', value: false })}>
            Close
          </Button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto">
          {state.items.length === 0 && (
            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
              Your cart is empty.
            </p>
          )}
          {state.items.map((item) => (
            <div key={item.sku} className="flex items-start justify-between border-b border-foreground/10 pb-4">
              <div className="flex flex-col gap-1 text-xs uppercase tracking-[0.2em]">
                <span>{item.title}</span>
                <span className="text-foreground/60">{item.variant}</span>
                <span>{formatPrice(item.price)}</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'DECREMENT', sku: item.sku })}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'INCREMENT', sku: item.sku })}>
                    +
                  </Button>
                </div>
              </div>
              <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'REMOVE', sku: item.sku })}>
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div className="space-y-4 border-t border-foreground/10 pt-4 text-xs uppercase tracking-[0.2em]">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Button asChild size="lg">
            <Link href="/checkout">Checkout</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
