import { createObject, Schema, create } from './typedSchema';

interface Analytic {
  url: string;
  title: string;
}

const analyticVersions: Analytic[] = [
  { title: 'Second version for analytic', url: 'b' },
  { title: 'Third version for analytic', url: 'c' },
];

const addLayout = () => [
  createObject({
    name: 'layout',
    title: 'Layout of the page',
    description: `You can set how page will be shown on the website`,
    fields: [
      createObject({
        type: 'column',
        name: 'column',
      })
    ],
  })
]

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
      type: 'meta',
    }),
  ]

  return createObject({
    name,
    title,
    type: 'document',
    fields: [
      ...fields,
      ...addLayout(),
      ...addAnalytic(fields)
    ],
    preview: {
      select: {
        content: 'content',
        meta: 'meta',
        image: 'image',
        id: '_id'
      },
      prepare({ content, meta, image, id }) {
        const title: string = content?.pl[0]?.children.map(child => child.text).join(' ') ?? meta?.title?.pl ?? '[No title]' 
        const subtitle: string = `id: ${id} | ${meta?.description?.pl ?? '[No meta description]'}`
        const media: string =  image ?? meta?.Social?.image
        return {
          title,
          subtitle, 
          media
        }
      }  
    },
  })
};
