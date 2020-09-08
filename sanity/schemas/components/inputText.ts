import {create, createImage, createObject} from '../utils/typedSchema'

export default createObject({
  name: 'InputText',
  fields: [
    create({
      name: 'label',
      description: 'label of input',
      type: 'localeString',
      required: 'error'
    }),
    create({
      name: 'Placeholder',
      description: 'Placeholder of text input',
      type: 'localeString',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'Placeholder'
    },
  },
});
