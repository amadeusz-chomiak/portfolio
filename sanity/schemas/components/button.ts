export default {
  name: 'Button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'Title',
      title: 'Title',
      description: 'Title inside the button',
      type: 'string',
    },
    {
      name: 'Description',
      title: 'Description',
      description: 'Action description below the button',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'Title',
      subtitle: 'Description'
    },
  },
};
