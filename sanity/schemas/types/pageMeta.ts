
export default {
  name: 'Meta',
  title: 'Meta tags',
  description: 'Page meta tags for SEO and social media',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'Title',
      description: 'Title will be used in site-map and page title meta tag',
      type: 'localeString',
   }
  ],
  preview: {
    select: {
      title: 'Title'
    }
  }
}
