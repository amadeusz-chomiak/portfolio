//* contact information (Github, email, who am I)
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('pageAbout', [
  createImage({
    name: 'image',
    description: 'Full height image',
    required: 'warn',
  }),
  createObject({
    name: 'content',
    description: 'content of about page',
    type: 'localeBlockContent',
    required: 'error',
  }),
  createObject({
    name: 'EmailContent',
    type: 'localeBlockContent',
    required: 'error',
  }),
  createObject({
    name: 'EmailButton',
    type: 'button',
    required: 'error',
  }),
  createObject({
    name: 'GithubContent',
    type: 'localeBlockContent',
    required: 'error',
  }),
  createObject({
    name: 'GithubButton',
    type: 'button',
    required: 'error',
  }),
]);
