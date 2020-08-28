//* contact information (Github, email, who am I)
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageAbout', [
  createObject({
    name: 'Content',
    description: 'Content of about page',
    type: 'LocaleBlockContent',
  }),
  createObject({
    name: 'EmailContent',
    type: 'LocaleBlockContent'
  }),
  createObject({
    name: 'EmailButton',
    type: 'Button'
  }),
  createObject({
    name: 'GithubContent',
    type: 'LocaleBlockContent'
  }),
  createObject({
    name: 'GithubButton',
    type: 'Button'
  })
]);
