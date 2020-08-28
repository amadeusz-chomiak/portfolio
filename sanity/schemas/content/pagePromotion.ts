//* actual promotions
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PagePromotion', [
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
  create({
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
