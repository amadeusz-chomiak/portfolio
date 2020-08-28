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
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
  createObject({
    name: 'Content',
    description: 'Content of solution page',
    type: 'LocaleBlockContent',
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
]);
