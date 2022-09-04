import { FleetOptimizer } from './lib/fleet-optimizer'
import { server, browser } from './database/index'

let database = {
  server,
  browser
}

export {
  FleetOptimizer,
  database
}