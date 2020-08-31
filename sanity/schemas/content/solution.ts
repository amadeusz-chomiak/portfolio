import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createObject({
  name: 'Solution',
  type: 'document',
  fields: [
    createObject({
      type: 'LocaleString',
      name: 'Value',
      description: 'Highlighted value of solution',
    }),
    createObject({
      type: 'Card',
      name: 'Solution',
    }),
  ],
});
