import {create, createImage, createObject} from '../utils/typedSchema'
export default createObject({
  name: 'card',
  title: 'card',
  description: 'Will render card',
  fields: [
    // createObject({
    //   name: 'title',
    //   description: 'title of the card',
    //   type: 'localeString',
    //   required: 'error'
    // }),
    // createObject({
    //   name: 'subtitle',
    //   description: 'subtitle of the card',
    //   type: 'localeText'
    // }),
    createObject({
      name: 'content',
      description: 'content of the card',
      type: 'localeBlockContent'
    }), 
    createObject({
      name: 'Action',
      fields: [
        create({
          name: 'Primary',
          type: 'localeString'
        }),
        create({
          name: 'Secondary',
          type: 'localeString'
        })
      ] 
    }),
    createImage({
      name: 'image',
      description: 'Small corner image for the card'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
    }
  }
})
