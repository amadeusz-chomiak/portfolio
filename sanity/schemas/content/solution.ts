import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createObject({
  name: 'solution',
  type: 'document',
  fields: [
    createObject({
      type: 'localeString',
      name: 'Value',
      description: 'Highlighted value of solution',
    }),
    createObject({
      type: 'card',
      name: 'solution',
    }),
  ],
});
