
import { createRxDatabase } from 'rxdb';

import contactSchema from './schema/contacts'
import customerSchema from './schema/customers'
import estimateSchema from './schema/estimates'
import fleetSchema from './schema/fleets'
import invoiceSchema from './schema/invoices'
import jobSchema from './schema/jobs'
import locationSchema from './schema/locations'
import professionalSchema from './schema/professionals'
import vehicleSchema from './schema/vehicles'
import workOrderSchema from './schema/workOrders'

async function addCollectionsToDatabase (database) {
  return await database.addCollections({
    contact: {
      schema: contactSchema
    },
    customer: {
      schema: customerSchema
    },
    estimate: {
      schema: estimateSchema
    },
    fleet: {
      schema: fleetSchema
    },
    invoice: {
      schema: invoiceSchema
    },
    job: {
      schema: jobSchema
    },
    location: {
      schema: locationSchema
    },
    professional: {
      schema: professionalSchema
    },
    vehicle: {
      schema: vehicleSchema
    },
    workOrder: {
      schema: workOrderSchema
    },
  });
}

export async function server () {
  let { getRxStoragePouch, addPouchPlugin } = require('rxdb/plugins/pouchdb');

  const leveldown = require('leveldown');

  addPouchPlugin(require('pouchdb-adapter-leveldb'));

  const rxdb = await createRxDatabase({
    name: 'data/istrav.pro',
    storage: getRxStoragePouch(leveldown)
  });

  return await addCollectionsToDatabase(rxdb)
}

export async function browser () {
  let dexiePlugin = (await import('rxdb/plugins/dexie'));

  const rxdb = await createRxDatabase({
    name: 'data/istrav.pro',
    storage: dexiePlugin.getRxStorageDexie()
  });

  return await addCollectionsToDatabase(rxdb)
}