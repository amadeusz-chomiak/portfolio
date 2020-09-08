import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

//* main page landing structure (menu, header)
export default createPage('site', [
  createObject({
    name: 'header',
    fields: [
      createObject({
        name: 'title',
        type: 'localeString'
      }),
      createObject({
        name: 'subtitle',
        type: 'localeString'
      }),
      createImage({name: 'image', description: 'Picture of Me'})
    ]
  }),
  createArray({
    name: 'pages',
    description: 'Order of pages on main site',
    of: [
      createObject({
        name: 'page',
        fields: [
          createReference({
            name: 'page',
            to: [
              {
                type: 'pageAbout',
              },
              {
                type: 'pageContact',
              },
              {
                type: 'pageHero',
              },
              {
                type: 'pagePrivacy',
              },
              {
                type: 'pagePromotion',
              },
              {
                type: 'pageSolution',
              },
            ],
          }),
          createObject({
            name: 'title',
            description: 'text on menu button to this page',
            type: 'localeString'
          }),
          createObject({
            name: 'link',
            description: 'text on link to next route',
            type: 'localeString'
          }),
          createObject({
            name: 'card',
            description: 'Use card only on one of pages! Or else it will be too crowded!',
            type: 'card'
          }),
          create({
            name: 'outside',
            title: 'Outside link',
            type: 'boolean',
            description: 'Do not render page inside site, but show it in menu'
          })
        ],
        preview: {
          select: {
            title: 'title',
            link: 'link',
            page: 'page',
            outside: 'outside'
          },
          prepare({title, link, page, outside}) {
            console.log('page', page)
            return {
              title: title?.pl,
              subtitle: `ref: ${page?._ref ?? '[no ref]'} | ${link?.pl ?? '[no link]'} ${outside ? '| [outside link]' : ''}`
            }
          }
        }
      }),
    ],
  }),
]);
