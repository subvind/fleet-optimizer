export default {
  title: 'vehicle schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    licensePlate: {
      type: 'string'
    },
    driver: {
      ref: 'professional',
      type: 'string'
    },
    fleet: {
      ref: 'fleet',
      type: 'string'
    }
  },
  required: ['id', 'licensePlate']
}