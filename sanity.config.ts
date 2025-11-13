import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'
import { deskStructure } from './sanity/deskStructure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xxxx'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: '621-archival-studio',
  title: '621 ARCHIVAL Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [deskTool({ structure: deskStructure }), visionTool()],
  schema,
  studio: {
    components: {}
  }
})
