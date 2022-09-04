import { FleetOptimizer } from './lib/fleet-optimizer'
import * as database from './database/index'

export default function main() {
  return {
    FleetOptimizer: FleetOptimizer,
    database: database
  }
}