const createPage = (name: string, customFields: object[], title = name) => ({
  name,
  title,
  type: 'document',
  fields: [
    ...customFields,
    // {
    //   name: 'Core',
    //   title: 'Core page settings',
    //   type: 'Core',
    // },
    {
      name: 'meta',
      title: 'SEO meta tags',
      type: 'Meta',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

export { createPage };
