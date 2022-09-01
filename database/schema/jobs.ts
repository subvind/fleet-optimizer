export default {
  title: 'job schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    amount: {
      type: 'integer'
    },
    workOrder: {
      ref: 'workOrder',
      type: 'string'
    }
  },
  required: ['id', 'workOrder', 'amount']
}