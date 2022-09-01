export default {
  title: 'professional schema',
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
    fleets: {
      type: 'array',
      ref: 'fleet',
      items: {
        type: 'string'
      }
    }
  },
  required: ['id', 'first', 'last']
}