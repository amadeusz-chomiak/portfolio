import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('Solution', [
  create({ type: 'LocaleString', name: 'Value', description: 'Highlighted value of solution' }),
  createObject({
    type: 'Card',
    name: 'Promotion',
  }),
]);
