import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

//* main page landing structure (menu, header)
export default createPage('Site', [
  createArray({
    name: 'Pages',
    description: 'Order of pages on main site',
    of: [
      createObject({
        name: 'Page',
        fields: [
          createReference({
            name: 'Page',
            to: [
              {
                type: 'PageAbout',
              },
              {
                type: 'PageContact',
              },
              {
                type: 'PageHero',
              },
              {
                type: 'PagePrivacy',
              },
              {
                type: 'PagePromotion',
              },
              {
                type: 'PageSolution',
              },
            ],
          }),
          createObject({
            name: 'Title',
            description: 'Text on menu button to this page',
            type: 'LocaleString'
          }),
          createObject({
            name: 'Link',
            description: 'Text on link to next route',
            type: 'LocaleString'
          }),
          createObject({
            name: 'Card',
            description: 'Use card only on one of pages! Or else it will be too crowded!',
            type: 'Card'
          }),
        ],
        preview: {
          select: {
            title: 'Title',
            link: 'Link',
            page: 'Page'
          },
          prepare({title, link, page}) {

            return {
              title: title?.pl,
              subtitle: `ref: ${page?._ref ?? '[no ref]'} | ${link?.pl ?? '[no link]'}`
            }
          }
        }
      }),
    ],
  }),
]);
