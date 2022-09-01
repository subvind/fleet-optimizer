export default {
  title: 'workOrder schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    number: {
      type: 'integer'
    },
    estimate: {
      ref: 'estimate',
      type: 'string'
    },
    job: {
      ref: 'job',
      type: 'string'
    },
    invoice: {
      ref: 'invoice',
      type: 'string'
    }
  },
  required: ['id', 'number', 'estimate', 'job', 'invoice']
}