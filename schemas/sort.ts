export default {
  name: 'sort',
  type: 'document',
  title: 'Sort',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'questionText',
      type: 'string',
      title: 'Question Text',
    },
    {
      name: 'optionOne',
      type: 'document',
      fields: [
        {
          name: 'optionOne',
          title: 'Option One',
          type: 'reference',
          weak: true,
          to: [{type: 'sortOption'}],
          description: '',
        },
      ],
    },

    {
      name: 'optionTwo',
      type: 'document',
      fields: [
        {
          name: 'optionTwo',
          title: 'Option Two',
          type: 'reference',
          weak: true,
          to: [{type: 'sortOption'}],
          description: '',
        },
      ],
    },
    {
      name: 'correctOption',
      type: 'document',
      fields: [
        {
          name: 'correctOption',
          title: 'Correct Option',
          type: 'reference',
          weak: true,
          to: [{type: 'sortOption'}],
          description: '',
        },
      ],
    },
    {
      name: 'nextSort',
      type: 'document',
      fields: [
        {
          name: 'nextSort',
          title: 'Next Sort',
          type: 'reference',
          weak: true,
          to: [{type: 'sort'}],
          description: '',
        },
      ],
    },
    {
      name: 'previousSort',
      type: 'document',
      fields: [
        {
          name: 'previousSort',
          title: 'Previous Sort',
          type: 'reference',
          weak: true,
          to: [{type: 'sort'}],
          description: '',
        },
      ],
    },
    {
      name: 'exercise',
      type: 'document',
      fields: [
        {
          name: 'exercise',
          title: 'Exercise',
          type: 'reference',
          weak: true,
          to: [{type: 'exercise'}],
          description: '',
        },
      ],
    },
  ],
}
