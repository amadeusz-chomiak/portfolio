//* contact information (Github, email, who am I)
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('PageAbout', [
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
  createObject({
    name: 'Content',
    description: 'Content of about page',
    type: 'LocaleBlockContent',
    required: 'error',
  }),
  createObject({
    name: 'EmailContent',
    type: 'LocaleBlockContent',
    required: 'error',
  }),
  createObject({
    name: 'EmailButton',
    type: 'Button',
    required: 'error',
  }),
  createObject({
    name: 'GithubContent',
    type: 'LocaleBlockContent',
    required: 'error',
  }),
  createObject({
    name: 'GithubButton',
    type: 'Button',
    required: 'error',
  }),
]);
