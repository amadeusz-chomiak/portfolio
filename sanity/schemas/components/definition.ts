import {create, createImage, createObject} from '../utils/typedSchema'
export default createObject({
  name: 'Definition',
  description: 'Will render definition tooltip',
  fields: [
    create({
      name: 'TextBefore',
      title: 'Before tooltip text',
      description: 'Text that will be created before text for tooltip',
      type: 'LocaleString',
    }),
    create({
      name: 'Text',
      title: 'Tooltip text',
      description: 'Text that will be highlighted as a tooltip link',
      type: 'LocaleString'
    }),
    create({
      name: 'TextAfter',
      title: 'After tooltip text',
      description: 'Text that will be created after text for tooltip',
      type: 'LocaleString',
    }),
    create({
      name: 'Title',
      description: 'Title of the tooltip',
      type: 'LocaleString',
      required: 'error'
    }),
    create({
      name: 'Content',
      description: 'Content of the tooltip',
      type: 'LocaleText'
    }),
    create({
      name: 'Color',
      description: "Main color of the tooltip. Will override default site colors. Useful for other brand's definitions",
      type: 'color',
      options: {
        disableAlpha: true
      }
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
