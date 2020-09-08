import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';
 
export default createObject({
  name: 'promotion',
  type: 'document',
  fields: [
    createObject({
      type: 'localeString',
      name: 'Value',
      description: 'Highlighted value of promotion',
    }),
    createObject({
      type: 'card',
      name: 'promotion',
    }),
  ],
});
