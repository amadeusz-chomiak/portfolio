const createPage = (name: string, customFields: object[], title = name) => ({
  name,
  title,
  type: 'document',
  fields: [
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
    ...customFields,
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});

export { createPage };
