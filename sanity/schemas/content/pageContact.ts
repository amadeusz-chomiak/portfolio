//* contact form content
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageContact', [
  createObject({
    name: 'Content',
    description: 'Content of about page',
    type: 'LocaleBlockContent',
  }),
  // createObject({
  //   name: 'Email',
  //   type: 'Input'
  // }),
  createObject({
    name: 'EmailButton',
    type: 'Button'
  })
]);