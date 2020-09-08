import {create, createImage, createObject} from '../utils/typedSchema'
export default createObject({
  name: 'meta',
  title: 'meta tags',
  description: 'Page meta tags for SEO and social media',
  type: 'object',
  fields: [
    create({
      name: 'title',
      description: 'title will be used in site-map and page title meta tag',
      type: 'localeString',
      required: 'error'
    }),
    create({
      name: 'description',
      description: 'description will be used in site-map and page description meta tag',
      type: 'localeText',
      required: 'warn'
    }),
    createObject({
      title: 'Social media',
      name: 'Social',
      fields: [
        create({
          name: 'title',
          type: 'localeString',
          description: 'title specific to social media, if not set will use meta title'
        }),
        create({
          name: 'description',
          type: 'localeText',
          description: 'description specific to social media, if not set will use meta description'
        }),
        createImage({
          name: 'image',
          description: 'image for social media banners. Best image size 1200x630px',
          required: 'warn'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
})
