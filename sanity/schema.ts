import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemas/siteSettings'
import product from './schemas/product'
import collection from './schemas/collection'
import drop from './schemas/drop'
import page from './schemas/page'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, product, collection, drop, page, project]
}
