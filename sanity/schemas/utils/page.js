//@ts-check

/**
 * @param  {string} name
 * @param  {object[]} customFields
 * @param  {string} title
 * @returns {object}
 */
const createPage = (name, customFields, title = name) => ({
  name,
  title,
  type: 'document',
  fields: [
    {
      name: 'meta',
      title: 'SEO meta tags',
      type: 'Meta',
    },
    ...customFields,
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

export { createPage };
