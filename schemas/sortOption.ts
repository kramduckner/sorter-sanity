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
      name: 'sortOptionSort',
      title: 'Sort',
      type: 'reference',
      to: [{type: 'sort'}],
      description: '',
    },
  ],
}
