export default {
  title: 'vehicle schema',
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
    licensePlate: {
      type: 'string'
    },
    vin: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    make: {
      type: 'string'
    },
    model: {
      type: 'string'
    },
    year: {
      type: 'number'
    },
    fuelVolumeUnits: {
      type: 'string', // gallons, liters
      default: 'gallons'
    },
    meterUnit: {
      type: 'string', // mi, km
      default: 'mi'
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
  required: ['id', 'name', 'fuelVolumeUnits', 'meterUnits']
}