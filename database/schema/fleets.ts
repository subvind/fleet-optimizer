export default {
  title: 'fleet schema',
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
    professionals: {
      type: 'array',
      ref: 'professional',
      items: {
        type: 'string'
      }
    },
    vehicles: {
      type: 'array',
      ref: 'vehicle',
      items: {
        type: 'string'
      }
    },
    workOrders: {
      type: 'array',
      ref: 'workOrder',
      items: {
        type: 'string'
      }
    },
  },
  required: ['id', 'name']
}