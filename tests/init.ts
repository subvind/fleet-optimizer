import { v4 as uuidv4 } from 'uuid';

import pro from '../index'

let fleetOptimizer = pro.FleetOptimizer.getInstance()

function create(db) {
  // create fleet
  db.fleet.insert({
    id: uuidv4(),
    name: 'Expert Services'
  })

  // create vehicles
  let v1 = db.vehicle.insert({
    id: uuidv4(),
    licensePlate: 'SDF123'
  })
  
  // create customers
  let c1 = db.customer.insert({
    id: uuidv4(),
    name: 'smith family'
  })
  let c2 = db.customer.insert({
    id: uuidv4(),
    name: 'j company'
  })
  
  // create customer locations and contacts
  db.contact.insert({
    id: uuidv4(),
    first: 'james',
    last: 'smith',
    customerId: c1.id
  })
  
  db.location.insert({
    id: uuidv4(),
    name: 'Austin, TX',
    latitude: 30.266666,
    longitude: -97.733330,
    customerId: c1.id
  })
  
  // create orders
  fleetOptimizer.workOrder(1).insert({
    customerId: c1.id
  })
  fleetOptimizer.workOrder(2).insert({
    customerId: c1.id
  })
  fleetOptimizer.workOrder(3).insert({
    customerId: c1.id
  })
}

async function destroy(db) {
  // destroy fleet
  await db.fleet.find({
    selector: {
      name: 'Expert Services'
    }
  }).remove()

  // destroy vehicles
  await db.vehicle.find({
    selector: {
      licensePlate: 'SDF123'
    }
  }).remove()

  // destroy customers
  await db.customer.find({
    selector: {
      name: 'smith family'
    }
  }).remove()
  await db.customer.find({
    selector: {
      name: 'j company'
    }
  }).remove()

  // destroy customer locations and contacts
  await db.contact.find({
    selector: {
      first: 'james',
      last: 'smith'
    }
  }).remove()
  await db.location.find({
    selector: {
      name: 'Austin, TX'
    }
  }).remove()

  // destory orders
  await fleetOptimizer.workOrder(1).remove()
  await fleetOptimizer.workOrder(2).remove()
  await fleetOptimizer.workOrder(3).remove()
}

async function test () {
  // check version
  console.log(`release: v${fleetOptimizer.version()}`)

  // required storage system
  let database
  setTimeout(async () => {
    database = await fleetOptimizer.database(pro.database.server)
  }, 500)

  let db = await fleetOptimizer.db()
  console.log(await db.customer.find().exec())

  // setup
  create(db)

  // perform
  let professionals = await fleetOptimizer.professionals()

  let fleets = await fleetOptimizer.fleets()
  let fleet1 = fleets[0]
  
  let vehicles = await fleetOptimizer.vehicles()
  let vehicle1 = vehicles[0]
  
  let locations = await fleetOptimizer.locations()
  let location1 = locations[0]

  fleetOptimizer.calculate(fleet1).turnByTurnDirections(vehicle1, location1)
  fleetOptimizer.calculate(fleet1).TSP()

  console.log('fleet1', fleet1.name)
  console.log('vehicle1', vehicle1.licensePlate)
  console.log('location1', location1.name)

  // teardown
  destroy(db)
}
test()
