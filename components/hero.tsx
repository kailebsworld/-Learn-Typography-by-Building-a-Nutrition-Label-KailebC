import Image from 'next/image'
import { sanityImageLoader } from '../lib/image'

export type HeroMedia = {
  type: 'image' | 'video'
  src: string
  alt?: string
  caption?: string
}

type HeroProps = {
  title: string
  eyebrow?: string
  description?: string
  media: HeroMedia
}

export function Hero({ title, eyebrow, description, media }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] border-b border-foreground/10 bg-background text-foreground">
      {media.type === 'video' ? (
        <video
          aria-label={media.alt || title}
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={media.src} />
        </video>
      ) : (
        <Image
          alt={media.alt || title}
          className="absolute inset-0 h-full w-full object-cover"
          loader={sanityImageLoader}
          priority
          src={media.src}
          fill
        />
      )}
      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
      <div className="container-grid relative flex min-h-[70vh] flex-col justify-end gap-8 py-20">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/70">{eyebrow}</p>
        )}
        <h1 className="max-w-2xl font-display text-5xl md:text-7xl">{title}</h1>
        {description && <p className="max-w-xl text-sm uppercase tracking-[0.3em]">{description}</p>}
        {media.caption && (
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">{media.caption}</span>
        )}
      </div>
    </section>
  )
}
