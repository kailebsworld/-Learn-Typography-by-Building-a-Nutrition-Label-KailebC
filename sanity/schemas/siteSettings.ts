import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'ogImage', type: 'image' }),
    defineField({
      name: 'nav',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'href', type: 'string' }] }]
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'object', fields: [{ name: 'title', type: 'string' }, { name: 'href', type: 'string' }] }]
    }),
    defineField({
      name: 'announcement',
      type: 'object',
      fields: [
        { name: 'text', type: 'string' },
        { name: 'url', type: 'string' },
        { name: 'enabled', type: 'boolean', initialValue: true }
      ]
    })
  ]
})
