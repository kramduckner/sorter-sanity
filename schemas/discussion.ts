export default {
  name: 'discussion',
  type: 'document',
  title: 'Discussion',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'sort',
      type: 'document',
      fields: [
        {
          name: 'sort',
          title: 'Sort',
          type: 'reference',
          weak: true,
          to: [{type: 'sort'}],
          description: '',
        },
      ],
    },
  ],
}
