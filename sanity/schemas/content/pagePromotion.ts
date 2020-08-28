//* actual promotions
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('PagePromotion', [
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
  createArray({
    name: 'Promotions',
    description: 'Active promotions',
    of: [
      createReference({
        name: 'Reference',
        to: [{ type: 'Promotion' }],
      }),
    ],
  }),
  createObject({
    name: 'Content',
    description: 'Content of Promotion page',
    type: 'LocaleBlockContent',
  }),
  // todo implement
  // createObject({
  //   name: 'ExampleButton',
  //   type: 'Button',
  // }),
  // createReference({
  //   name: 'ExamplePage',
  //   to: [{ type: 'PageExample' }],
  // }),
]);
