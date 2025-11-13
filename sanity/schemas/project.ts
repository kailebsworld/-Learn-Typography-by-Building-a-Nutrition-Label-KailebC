import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'year', type: 'number' }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cover', type: 'image' }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'credits', type: 'array', of: [{ type: 'string' }] })
  ]
})
