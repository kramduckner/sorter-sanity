export default {
  name: 'sortOption',
  type: 'document',
  title: 'Sort Option',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
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
          description: 'The sort duh',
        },
      ],
    },
  ],
}
