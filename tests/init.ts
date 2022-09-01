import { FleetOptimizer } from '../index'

let fleetOptimizer = FleetOptimizer.getInstance()

// init fleet
let myfleet = fleetOptimizer.fleet('myfleet').add()

// create customers
fleetOptimizer.customer('smith family').add()
fleetOptimizer.customer('j company').add()

// create customer locations and contacts
let contactA = fleetOptimizer.contact('john', 'smith').add()
contactA.customerId('smith family')

let locationA = fleetOptimizer.location('Austin, TX').add()
locationA.customerId('smith family')
locationA.coordinates({
  latitude: 30.266666,
  longitude: -97.733330,
})

// create orders
fleetOptimizer.order(1).add()
fleetOptimizer.order(2).add()
fleetOptimizer.order(3).add()

// link orders to customers
fleetOptimizer.order(1).customerId('smith family')
fleetOptimizer.order(2).customerId('smith family')
fleetOptimizer.order(3).customerId('j company')

console.log(fleetOptimizer.get())
