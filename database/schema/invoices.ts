export default {
  title: 'invoice schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    total: {
      type: 'integer'
    },
    workOrder: {
      ref: 'workOrder',
      type: 'string'
    }
  },
  required: ['id', 'workOrder', 'total']
}