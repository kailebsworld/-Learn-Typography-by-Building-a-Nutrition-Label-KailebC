'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('success')
  }

  return (
    <section className="border-y border-foreground/10 bg-background py-16">
      <div className="container-grid flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="font-display text-4xl">Stay current.</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
            Drops, events, independent design in your inbox.
          </p>
        </div>
        <form className="flex flex-col gap-3 md:w-1/3" onSubmit={onSubmit}>
          <Input aria-label="Email" placeholder="Email" required type="email" />
          <Button type="submit" variant="outline">
            Join the list
          </Button>
          {status === 'success' && (
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Thanks for subscribing.
            </span>
          )}
        </form>
      </div>
    </section>
  )
}
