//* solutions I can provide
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('PageSolution', [
  createObject({
    name: 'Content',
    description: 'Content of solution page',
    type: 'LocaleBlockContent',
    required: 'error',
  }),
  createArray({
    name: 'Solutions',
    description: 'Active solutions',
    of: [
      createReference({
        name: 'Reference',
        to: [{ type: 'Solution' }],
      }),
    ],
  }),
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
]);
