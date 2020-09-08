//* solutions I can provide
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('pageSolution', [
  createObject({
    name: 'content',
    description: 'content of solution page',
    type: 'localeBlockContent',
    required: 'error',
  }),
  createArray({
    name: 'Solutions',
    description: 'Active solutions',
    of: [
      createReference({
        name: 'reference',
        to: [{ type: 'solution' }],
      }),
    ],
  }),
  createImage({
    name: 'image',
    description: 'Full height image',
    required: 'warn',
  }),
]);
