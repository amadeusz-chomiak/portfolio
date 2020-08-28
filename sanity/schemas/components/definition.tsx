import { create, createImage, createObject } from '../utils/typedSchema';
//@ts-expect-error
import React from 'react';

export default createObject({
  name: 'Definition',
  description: 'Will render definition tooltip',
  fields: [
    create({
      name: 'TextBefore',
      title: 'Before tooltip text',
      description: 'Text that will be created before text for tooltip',
      type: 'string',
    }),
    create({
      name: 'Text',
      title: 'Tooltip text',
      description: 'Text that will be highlighted as a tooltip link',
      type: 'string',
    }),
    create({
      name: 'TextAfter',
      title: 'After tooltip text',
      description: 'Text that will be created after text for tooltip',
      type: 'string',
    }),
    create({
      name: 'Title',
      description: 'Title of the tooltip',
      type: 'string',
      required: 'error',
    }),
    create({
      name: 'Content',
      description: 'Content of the tooltip',
      type: 'text',
      required: 'warn'
    }),
    create({
      name: 'Color',
      description:
        "Main color of the tooltip. Will override default site colors. Useful for other brand's definitions",
      type: 'color',
      options: {
        disableAlpha: true,
      },
    }),
  ],
  preview: {
    select: {
      textBefore: 'TextBefore',
      text: 'Text',
      textAfter: 'TextAfter',
      title: 'Title',
      color: 'Color',
    },
    prepare({ title, color, text, textBefore, textAfter }) {
      return {
        title: text ? `${textBefore ?? ''} ${text} ${textAfter ?? ''}` : 'no text',
        subtitle: title ?? 'no title',
        media: <div style={{ backgroundColor: color?.hex ?? 'transparent', height: '100%', width: '100%' }} />,
      };
    },
  },
});
