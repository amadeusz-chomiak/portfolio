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
  createImage({
    name: 'Image',
    description: 'Full height image',
    required: 'warn',
  }),
  createObject({
    name: 'Content',
    description: 'Content of hero page',
    type: 'LocaleBlockContent',
  }),
]);
