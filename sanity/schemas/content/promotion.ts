import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('Promotion', [
  create({ type: 'LocaleString', name: 'Value', description: 'Value of promotion' }),
  createObject({
    type: 'Card',
    name: 'Promotion',
  }),
]);
