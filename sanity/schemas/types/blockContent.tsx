// @ts-expect-error
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
  title: 'Block content Basic',
  name: 'blockContentBasic',
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
        addStyle('unimportant', 0.9, 0.85),
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
            name: 'route',
            type: 'object',
            icon: RiRouteLine,
            fields: [
              createRouteLink()
            ],
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.

    {
      type: 'definition',
    },
  ],
};
