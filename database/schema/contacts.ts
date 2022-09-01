export default {
  title: 'contact schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    first: {
      type: 'string'
    },
    last: {
      type: 'string'
    },
    age: {
      description: 'age in years',
      type: 'integer',

      // number fields that are used in an index, must have set minium, maximum and multipleOf
      minimum: 0,
      maximum: 150,
      multipleOf: 1
    }
  },
  required: ['id', 'first', 'last'],
  indexes: ['age']
}