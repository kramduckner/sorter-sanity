export default {
  name: 'discussionComment',
  type: 'document',
  title: 'Discussion Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'discussion',
      type: 'document',
      fields: [
        {
          name: 'discussion',
          title: 'Discussion',
          type: 'reference',
          weak: true,
          to: [{type: 'discussion'}],
          description: '',
        },
      ],
    },
  ],
}
