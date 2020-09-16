import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';
import { BsFillStarFill } from 'react-icons/bs';
export default createObject({
  name: 'solution',
  type: 'document',
  fields: [
    createObject({
      type: 'localeString',
      name: 'Value',
      description: 'Highlighted value of solution',
    }),
    createObject({
      type: 'card',
      name: 'solution',
      collapsed: 'disallow',
    }),
  ],
  preview: {
    select: {
      solution: 'solution',
    },
    prepare({ solution }) {
      const content = solution.content.pl;
      return {
        title: content[0].children[0].text,
        subtitle: content[1].children[0].text,
        media: BsFillStarFill,
      };
    },
  },
});
