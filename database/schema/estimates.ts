export default {
  title: 'estimate schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    cost: {
      type: 'integer'
    },
    workOrder: {
      ref: 'workOrder',
      type: 'string'
    }
  },
  required: ['id', 'workOrder', 'cost']
}