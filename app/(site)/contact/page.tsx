import { Metadata } from 'next'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'

export const metadata: Metadata = {
  title: 'Contact — 621 ARCHIVAL'
}

export default function ContactPage() {
  return (
    <section className="bg-background py-20">
      <div className="container-grid space-y-8">
        <div className="space-y-4">
          <h1 className="font-display text-5xl">Contact</h1>
          <p className="max-w-xl text-sm uppercase tracking-[0.2em] text-foreground/70">
            Collaborations, stockists, or press — we answer every note.
          </p>
        </div>
        <form className="grid gap-4 md:w-1/2">
          <Input aria-label="Name" placeholder="Name" required />
          <Input aria-label="Email" placeholder="Email" required type="email" />
          <textarea
            aria-label="Message"
            className="min-h-[140px] border border-foreground/20 bg-transparent p-4 text-sm uppercase tracking-[0.2em] focus:border-foreground focus:outline-none"
            placeholder="Message"
            required
          />
          <Button className="justify-start" variant="outline">
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}
