import {create, createImage, createObject} from '../utils/typedSchema'
export default createObject({
  name: 'Card',
  title: 'Card',
  description: 'Will render card',
  fields: [
    createImage({
      name: 'Image',
      description: 'Small corner image for the card'
    }),
    create({
      name: 'Title',
      description: 'Title of the card',
      type: 'LocaleString',
      required: 'error'
    }),
    create({
      name: 'Subtitle',
      description: 'Subtitle of the card',
      type: 'LocaleText'
    }),
    create({
      name: 'Content',
      description: 'Content of the card',
      type: 'LocaleBlockContentBasic'
    }), 
  ],
  preview: {
    select: {
      title: 'Title',
      subtitle: 'Subtitle',
      media: 'Image'
    }
  }
})
