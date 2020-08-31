import {create, createImage, createObject} from '../utils/typedSchema'
export default createObject({
  name: 'Card',
  title: 'Card',
  description: 'Will render card',
  fields: [
    // createObject({
    //   name: 'Title',
    //   description: 'Title of the card',
    //   type: 'LocaleString',
    //   required: 'error'
    // }),
    // createObject({
    //   name: 'Subtitle',
    //   description: 'Subtitle of the card',
    //   type: 'LocaleText'
    // }),
    createObject({
      name: 'Content',
      description: 'Content of the card',
      type: 'LocaleBlockContent'
    }), 
    createObject({
      name: 'Action',
      fields: [
        create({
          name: 'Primary',
          type: 'LocaleString'
        }),
        create({
          name: 'Secondary',
          type: 'LocaleString'
        })
      ] 
    }),
    createImage({
      name: 'Image',
      description: 'Small corner image for the card'
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
