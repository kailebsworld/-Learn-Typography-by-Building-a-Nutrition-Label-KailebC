import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'price', type: 'number', validation: (Rule) => Rule.min(0) }),
    defineField({ name: 'compareAtPrice', type: 'number' }),
    defineField({ name: 'images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({
      name: 'variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'sku', type: 'string' },
            { name: 'size', type: 'string' },
            { name: 'color', type: 'string' },
            { name: 'stock', type: 'number' },
            { name: 'stripePriceId', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'collections',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collection' }] }]
    }),
    defineField({ name: 'drop', type: 'reference', to: [{ type: 'drop' }] }),
    defineField({ name: 'featured', type: 'boolean' }),
    defineField({
      name: 'assets',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', type: 'string', options: { list: ['image', 'video'] } },
            { name: 'alt', type: 'string' },
            { name: 'asset', type: 'image' }
          ]
        }
      ]
    })
  ]
})
