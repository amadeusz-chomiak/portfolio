//* contact form content
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('pageContact', [
  createImage({
    name: 'image',
    description: 'Full height image',
    required: 'warn',
  }),
  createObject({
    name: 'content',
    description: 'content of about page',
    type: 'localeBlockContent',
    required: 'error'
  }),
  // createObject({
  //   name: 'Email',
  //   type: 'Input'
  // }),
  createObject({
    name: 'EmailButton',
    type: 'button',
    required: 'error',
  }),
]);
