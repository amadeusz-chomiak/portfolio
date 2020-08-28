//* solutions I can provide
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageSolution', [
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