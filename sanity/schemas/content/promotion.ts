import { BsFillStarFill } from 'react-icons/bs';
import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';
 
export default createObject({
  name: 'promotion',
  type: 'document',
  fields: [
    createObject({
      type: 'localeString',
      name: 'Value',
      description: 'Highlighted value of promotion',
    }),
    createObject({
      type: 'card',
      name: 'promotion',
      collapsed: 'disallow',
    }),
  ],
  preview: {
    select: {
      promotion: 'promotion',
    },
    prepare({ promotion }) {
      const content = promotion.content.pl;
      return {
        title: content[0].children[0].text,
        subtitle: content[1].children[0].text,
        media: BsFillStarFill,
      };
    },
  },
});
