import {create, createImage, createObject} from '../utils/typedSchema'

export default createObject({
  name: 'InputText',
  fields: [
    create({
      name: 'Label',
      description: 'Label of input',
      type: 'LocaleString',
      required: 'error'
    }),
    create({
      name: 'Placeholder',
      description: 'Placeholder of text input',
      type: 'LocaleString',
    }),
  ],
  preview: {
    select: {
      title: 'Label',
      subtitle: 'Placeholder'
    },
  },
});
