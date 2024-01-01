export default {
  name: 'discussionComment',
  type: 'document',
  title: 'Discussion Comment',
  fields: [
    {
      name: 'comment',
      type: 'string',
      title: 'Comment',
    },
    {
      name: 'commentDiscussion',
      title: 'Dicussion',
      type: 'reference',
      to: [{type: 'discussion'}],
      description: '',
    },
    {
      name: 'username',
      type: 'string',
      title: 'Username',
    },
  ],
}
