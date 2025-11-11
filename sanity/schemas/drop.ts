import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'drop',
  title: 'Drop',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'launchDate', type: 'datetime' }),
    defineField({ name: 'hero', type: 'image' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] })
  ]
})
