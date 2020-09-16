import { create, createObject } from '../utils/typedSchema';
import { RiLayoutColumnFill } from 'react-icons/ri';

export default createObject({
  name: 'column',
  title: 'Column settings',
  description:
    'Creates invisible element, that will try to move content below it to chosen column',
  fields: [
    create({
      type: 'string',
      name: 'set',
      title: 'Chose column for content',
      options: {
        list: [
          { title: 'Break to first column after this', value: 'only-first' },
          { title: 'Break to second column after this', value: 'only-second' },
          { title: 'Break to both column after this', value: 'both' },
        ],
      },
      required: 'error'
    }),
  ],
  preview: {
    select: {
      set: 'set'
    },
    prepare({ set }) {

      return {
        title: 'Column settings',
        subtitle: `After this change to [${set}] column`,
        media: RiLayoutColumnFill
      }
    }
  }
});
