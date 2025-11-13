import type { ImageLoader } from 'next/image'
import { imageBuilder } from './sanity'

export const sanityImageLoader: ImageLoader = ({ src, width, quality }) => {
  if (src.startsWith('/')) {
    return src
  }

  const builder = imageBuilder.image(src).width(width).quality(quality || 80).auto('format')
  return builder.url()
}
