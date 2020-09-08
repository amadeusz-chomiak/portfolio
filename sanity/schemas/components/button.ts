import {create, createImage, createObject} from '../utils/typedSchema'

export default createObject({
  name: 'button',
  fields: [
    create({
      name: 'title',
      description: 'title inside the button',
      type: 'localeString',
      required: 'error'
    }),
    create({
      name: 'description',
      description: 'Action description below the button',
      type: 'localeText',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
  },
});
