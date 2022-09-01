export default {
  title: 'location schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string'
    },
    latitude: {
      type: 'integer'
    },
    longitude: {
      type: 'integer'
    }
  },
  required: ['id', 'name']
}