import React from 'react';
import {BiArrowFromTop} from 'react-icons/bi'
import {RiRouteLine} from 'react-icons/ri'
const addStyle = (value: string, size: number, opacity: number = 1) => ({
  title: value,
  value: value,
  blockEditor: {
    render: (props) => (
      <span style={{ fontFamily: 'Montserrat', fontSize: `${size}rem`, opacity }}>
        {props.children}
      </span>
    ),
  },
});

import {
  create,
  createImage,
  createObject,
  createArray,
} from '../utils/typedSchema';
import { createRouteLink } from '../utils/routes';

export default {
  title: 'Block Content Basic',
  name: 'BlockContentBasic',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        addStyle('normal', 1),
        addStyle('subtitle', 1.125),
        addStyle('title', 1.25),
        // addStyle('unimportant', 0.9, 0.85),
        // addStyle('hidden', 1, 0.6),
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Route',
            name: 'Route',
            type: 'object',
            icon: RiRouteLine,
            fields: [
              createRouteLink()
            ],
          },
          {
            title: 'Scroll',
            name: 'Scroll',
            type: 'object',
            icon: BiArrowFromTop,
            fields: [
              create({
                name: 'title',
                title: 'Scroll to title',
                type: 'string',
                description: 'Will scroll to first partial match to title in this content field',
                required: 'error'
              })
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    {
      type: 'Definition',
    },
  ],
};
