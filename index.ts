import { FleetOptimizer } from './lib/fleet-optimizer'
import * as database from './database/index'

let result = {
  main: FleetOptimizer,
  database: database
}

export default result