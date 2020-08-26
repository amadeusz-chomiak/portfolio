export default {
  name: 'Button',
  title: 'Button',
  type: 'document',
  fields: [
    {
      name: 'Title',
      title: 'Title',
      description: 'Title inside the button',
      type: 'string',
    },
    {
      name: 'Level',
      title: 'Button Level',
      type: 'string',
      options: {
        list: [
          {
            title: '1 Highlighted primary',
            value: 'highlight',
          },
          {
            title: '2 primary',
            value: 'primary',
          },
          {
            title: '3 secondary',
            value: 'secondary',
          },
          {
            title: '4 tertiary',
            value: 'tertiary',
          },
        ],
        layout: 'radio'
      },
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
      subtitle: 'Level'
    },
  },
};
