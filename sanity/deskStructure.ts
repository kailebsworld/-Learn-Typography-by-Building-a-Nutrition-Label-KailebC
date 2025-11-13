import { StructureBuilder } from 'sanity/desk'

const singletonList = ['siteSettings']

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('621 ARCHIVAL')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => !singletonList.includes(listItem.getId()!))
    ])
