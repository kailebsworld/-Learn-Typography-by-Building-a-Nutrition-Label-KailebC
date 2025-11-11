import { createClient } from '@sanity/client'
import { definePreview } from 'next-sanity/preview'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectIdEnv = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xxxx'
const datasetEnv = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const sanityConfig = {
  projectId: projectIdEnv,
  dataset: datasetEnv,
  apiVersion: '2024-02-07',
  useCdn: true,
  perspective: 'published' as const
}

export const sanityClient = createClient({
  ...sanityConfig,
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: Boolean(process.env.SANITY_API_READ_TOKEN) === false
})

export const previewClient = definePreview({
  projectId: projectIdEnv,
  dataset: datasetEnv
})

export const imageBuilder = createImageUrlBuilder({ projectId: projectIdEnv, dataset: datasetEnv })

export function urlFor(source: any) {
  return imageBuilder.image(source)
}
