import {create, createImage, createObject} from '../utils/typedSchema'
export default {
  name: 'Meta',
  title: 'Meta tags',
  description: 'Page meta tags for SEO and social media',
  type: 'object',
  fields: [
    create({
      name: 'Title',
      description: 'Title will be used in site-map and page title meta tag',
      type: 'localeString',
      required: 'error'
    }),
    create({
      name: 'Description',
      description: 'Description will be used in site-map and page description meta tag',
      type: 'localeText',
      required: 'warn'
    }),
    createObject({
      title: 'Social media',
      name: 'Social',
      fields: [
        create({
          name: 'Title',
          type: 'localeString',
          description: 'Title specific to social media, if not set will use meta title'
        }),
        create({
          name: 'Description',
          type: 'localeText',
          description: 'Description specific to social media, if not set will use meta description'
        }),
        createImage({
          name: 'Image',
          description: 'Image for social media banners. Best image size 1200x630px',
          required: 'warn'
        })
      ]
    })
  ],
  options: {
    collapsible: true,
    collapsed: true
  },
  preview: {
    select: {
      title: 'Title',
      subtitle: 'Description'
    }
  }
}
