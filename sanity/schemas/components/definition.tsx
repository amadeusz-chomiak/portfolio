import { create, createImage, createObject } from '../utils/typedSchema';
//@ts-expect-error
import React from 'react';

export default createObject({
  name: 'definition',
  description: 'Will render definition tooltip',
  fields: [
    create({
      name: 'textBefore',
      title: 'Before tooltip text',
      description: 'text that will be created before text for tooltip',
      type: 'string',
    }),
    create({
      name: 'text',
      title: 'Tooltip text',
      description: 'text that will be highlighted as a tooltip link',
      type: 'string',
    }),
    create({
      name: 'textAfter',
      title: 'After tooltip text',
      description: 'text that will be created after text for tooltip',
      type: 'string',
    }),
    create({
      name: 'title',
      description: 'title of the tooltip',
      type: 'string',
      required: 'error',
    }),
    create({
      name: 'content',
      description: 'content of the tooltip',
      type: 'text',
      required: 'warn'
    }),
    create({
      name: 'color',
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
      textBefore: 'textBefore',
      text: 'text',
      textAfter: 'textAfter',
      title: 'title',
      color: 'color',
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
