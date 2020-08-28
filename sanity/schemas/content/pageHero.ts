//* hero section
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageHero', [
  createObject({
    name: 'Content',
    description: 'Content of hero page',
    type: 'LocaleBlockContent',
  }),
]);
