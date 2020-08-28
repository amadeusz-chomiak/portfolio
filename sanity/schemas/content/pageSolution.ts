//* solutions I can provide
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageSolution', [
  create({
    name: 'Content',
    description: 'Content of solution page',
    type: 'LocaleBlockContentComplex',
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