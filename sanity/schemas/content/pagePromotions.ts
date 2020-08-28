//* actual promotions
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PagePromotions', [
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
    type: 'LocaleBlockContentComplex',
  }),
  createObject({
    name: 'ExampleButton',
    type: 'Button',
  }),
  // todo implement
  // createReference({
  //   name: 'ExamplePage',
  //   to: [{ type: 'PageExample' }],
  // }),
]);
