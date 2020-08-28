//* contact form content
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageContact', [
  create({
    name: 'Content',
    description: 'Content of about page',
    type: 'LocaleBlockContentComplex',
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