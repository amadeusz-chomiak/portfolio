import { createObject, Schema, create } from './typedSchema';

interface Analytic {
  url: string;
  title: string;
}

const analyticVersions: Analytic[] = [
  { title: 'Second version for analytic', url: 'b' },
  { title: 'Third version for analytic', url: 'c' },
];

const addAnalytic = (fields: Schema[]) =>
  analyticVersions.map((analytic) =>
    createObject({
      name: analytic.url,
      title: analytic.title,
      description: `Analytic will redirect some user for this version prefixed with "${analytic.url}". The same prefix will be used for analytic tags. You don't need to set every option`,
      fields: fields.map(field => ({required: 'no',...field}))
    })
  );

export const createPage = (name: string, customFields: Schema[], title = name) => {
  const fields = [
    ...customFields,
    createObject({
      name: 'meta',
      title: 'SEO meta tags',
      type: 'Meta',
    }),
  ]

  return {
    name,
    title,
    type: 'document',
    fields: [
      ...fields,
      ...addAnalytic(fields)
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }
};
