//* hero section
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('PageHero', [
  create({
    name: 'Content',
    description: 'Content of hero page',
    type: 'LocaleBlockContentComplex',
  }),
]);
