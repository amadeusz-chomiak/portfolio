//* actual promotions
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('pagePromotion', [
  createObject({
    name: 'content',
    description: 'content of promotion page',
    type: 'localeBlockContent',
    required: 'error',
  }),
  createArray({
    name: 'promotions',
    description: 'Active promotions',
    of: [
      createReference({
        name: 'reference',
        to: [{ type: 'promotion' }],
      }),
    ],
  }),
  createImage({
    name: 'image',
    description: 'Full height image',
    required: 'warn',
  }),
  // todo implement
  // createObject({
  //   name: 'ExampleButton',
  //   type: 'button',
  // }),
  // createReference({
  //   name: 'ExamplePage',
  //   to: [{ type: 'PageExample' }],
  // }),
]);
