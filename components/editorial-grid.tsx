'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { sanityImageLoader } from '../lib/image'

export type EditorialItem = {
  title: string
  href: string
  image: string
  caption?: string
  side?: 'left' | 'right'
}

type EditorialGridProps = {
  archive: EditorialItem
  shop: EditorialItem
}

export function EditorialGrid({ archive, shop }: EditorialGridProps) {
  return (
    <section className="border-b border-foreground/10 bg-background">
      <div className="container-grid grid gap-6 py-16 md:grid-cols-2">
        {[archive, shop].map((item) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link className="group relative block overflow-hidden" href={item.href}>
              <div className="relative aspect-[4/5] overflow-hidden border border-foreground/10 bg-foreground/5">
                <Image
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loader={sanityImageLoader}
                  src={item.image}
                  fill
                />
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 text-xs uppercase tracking-[0.2em] text-foreground/80">
                    {item.caption}
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em]">
                <span>{item.title}</span>
                <span>Enter</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
