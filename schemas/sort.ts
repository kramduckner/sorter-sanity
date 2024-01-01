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
      title: 'Option One',
      type: 'reference',
      to: [{type: 'sortOption'}],
      description: '',
    },
    {
      name: 'optionTwo',
      title: 'Option Two',
      type: 'reference',
      to: [{type: 'sortOption'}],
      description: '',
    },
    {
      name: 'correctOption',
      title: 'Correct Option',
      type: 'reference',
      to: [{type: 'sortOption'}],
      description: '',
    },
    {
      name: 'nextSort',
      title: 'Next Sort',
      type: 'reference',
      to: [{type: 'sort'}],
      description: '',
    },
    {
      name: 'previousSort',
      title: 'Previous Sort',
      type: 'reference',
      to: [{type: 'sort'}],
      description: '',
    },
    {
      name: 'sortExercise',
      title: 'Exercise',
      type: 'reference',
      to: [{type: 'exercise'}],
      description: '',
    },
  ],
}
