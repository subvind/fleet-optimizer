import { FleetOptimizer } from '../index'

let fleetOptimizer = FleetOptimizer.getInstance()

// init fleet
fleetOptimizer.fleet('myfleet').add()
let myfleet = fleetOptimizer.fleet('myfleet')

// create customers
myfleet.customer('smith family').add()
myfleet.customer('j company').add()

// create customer locations and contacts
let contactA = myfleet.contact('john', 'smith').add()
contactA.customerId('smith family')

let locationA = myfleet.location('Austin, TX').add()
locationA.customerId('smith family')
locationA.coordinates({
  latitude: 30.266666,
  longitude: -97.733330,
})

// create orders
myfleet.order(1).add()
myfleet.order(2).add()
myfleet.order(3).add()

// link orders to customers
myfleet.order(1).customerId('smith family')
myfleet.order(2).customerId('smith family')
myfleet.order(3).customerId('j company')

console.log(fleetOptimizer.get())
