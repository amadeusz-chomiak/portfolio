//* hero section
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('pageHero', [
  createObject({
    name: 'content',
    description: 'content of hero page',
    type: 'localeBlockContent',
    required: 'error'
  }),
  createImage({
    name: 'image',
    description: 'Full height image',
    required: 'warn',
  }),
]);
