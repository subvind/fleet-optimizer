import { FleetOptimizer } from '../index'

let fleetOptimizer = FleetOptimizer.getInstance()

// // init consensus
// fleetOptimizer.system('istrav').add({
//   'address': 'tcp://localhost:8089',
//   'election min': '200 millisecond',
//   'election max': '1 second'
// })
// fleetOptimizer.system('istrav').join('tcp://localhost:8081')
// fleetOptimizer.system('istrav').join('tcp://localhost:8082')
// fleetOptimizer.system('istrav').join('tcp://localhost:8083')

// init fleet
fleetOptimizer.fleet('myfleet').add()
let myfleet = fleetOptimizer.fleet('myfleet')

// create customers
myfleet.customer('smith family').add()
myfleet.customer('j company').add()

// create orders
myfleet.order(1).add()
myfleet.order(2).add()
myfleet.order(3).add()

// link orders to customers
myfleet.order(1).customerId('smith family')
myfleet.order(2).customerId('smith family')
myfleet.order(3).customerId('j company')

console.log(fleetOptimizer.get())
