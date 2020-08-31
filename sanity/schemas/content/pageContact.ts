//* contact form content
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('PageContact', [
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
  createObject({
    name: 'Content',
    description: 'Content of about page',
    type: 'LocaleBlockContent',
    required: 'error'
  }),
  // createObject({
  //   name: 'Email',
  //   type: 'Input'
  // }),
  createObject({
    name: 'EmailButton',
    type: 'Button',
    required: 'error',
  }),
]);
