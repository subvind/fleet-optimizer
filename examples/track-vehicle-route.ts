import pro from '../index'

let fleetOptimizer = pro.FleetOptimizer.getInstance()

// notice: below code is old api

// init fleet
let myfleet = fleetOptimizer.fleet('myfleet').add()
let somefleet = fleetOptimizer.fleet('somefleet').add()

// create customers
let customer1 = fleetOptimizer.customer('smith family').add()
let customer2 = fleetOptimizer.customer('j company').add()

// create customer locations and contacts
let contactA = fleetOptimizer.contact('john', 'smith').add()
contactA.customerId('smith family')

let locationA = fleetOptimizer.location('Austin, TX').add()
locationA.customerId('smith family')
locationA.coordinates({
  latitude: 30.266666,
  longitude: -97.733330,
})

// create professional
let professional = fleetOptimizer.professional('lisa', 'brown').add()
professional.fleetId('myfleet')

// create vehicle
let vehicle1 = fleetOptimizer.vehicle('ford truck').add()

// give professional command over the vehicle
vehicle1.driverId('lisa', 'brown')

// for turn by turn directions
vehicle1.routeToLocationId('Austin, TX')

// begin recording session
vehicle1.trackStartRecording(new Date)

/**
 * normally we'd get our coordinates from GPS or browser
 */ 
// navigator.geolocation.getCurrentPosition(function(location) {
//   console.log(location.coords.latitude);
//   console.log(location.coords.longitude);
//   console.log(location.coords.accuracy);
// });

// begin tracking
let counter = 1
let interval = setInterval(() => {
  // example recording of vehicle route every half second
  vehicle1.trackRecordPosition({
    timestamp: new Date(),
    coordinates: {
      latitude: 30.266666 + (counter / 100),
      longitude: -97.733330 + (counter / 100),
    }
  })
  counter++
}, 500)

// after 10 seconds
setTimeout(() => {
  // end tracking
  clearInterval(interval)

  // end recording session
  vehicle1.trackStopRecording(new Date)
}, 10000)

console.log(fleetOptimizer.get())
