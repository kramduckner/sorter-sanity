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
      name: 'discussionSort',
      title: 'Sort',
      type: 'reference',
      weak: true,
      to: [{type: 'sort'}],
      description: '',
    },
  ],
}
