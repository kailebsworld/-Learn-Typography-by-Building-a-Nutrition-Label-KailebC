'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

type AnnouncementBarProps = {
  text?: string
  url?: string
  enabled?: boolean
}

export function AnnouncementBar({ text, url, enabled = true }: AnnouncementBarProps) {
  const shouldReduceMotion = useReducedMotion()

  if (!enabled || !text) return null

  const content = (
    <motion.span
      aria-live="polite"
      className="flex items-center gap-4 whitespace-nowrap text-xs uppercase tracking-[0.2em]"
      initial={{ x: shouldReduceMotion ? 0 : '100%' }}
      animate={{ x: shouldReduceMotion ? 0 : ['100%', '-100%'] }}
      transition={{ duration: shouldReduceMotion ? 0 : 20, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'linear' }}
    >
      {text}
    </motion.span>
  )

  return (
    <div className="overflow-hidden border-b border-foreground/10 bg-background py-2 text-foreground">
      <div className="container-grid">
        {url ? (
          <Link className="block" href={url}>
            {content}
          </Link>
        ) : (
          content
        )}
      </div>
    </div>
  )
}
