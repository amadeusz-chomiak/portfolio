//* hero section
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
  createImage,
} from '../utils/typedSchema';

export default createPage('PageHero', [
  createObject({
    name: 'Content',
    description: 'Content of hero page',
    type: 'LocaleBlockContent',
    required: 'error'
  }),
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
]);
