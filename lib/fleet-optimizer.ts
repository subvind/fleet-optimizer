import { v4 as uuidv4 } from 'uuid';
import { version } from '../package.json';

export class FleetOptimizer {
  private rxdb: any = null;
  private static instance: FleetOptimizer;

  private constructor() {}

  public static getInstance(): FleetOptimizer {
    if (!FleetOptimizer.instance) {
      FleetOptimizer.instance = new FleetOptimizer();
    }

    return FleetOptimizer.instance;
  }

  public db(): Promise<any> {
    // check if loaded every 0.2 seconds
    let that = this
    return new Promise((resolve) => {
      let interval = setInterval(async () => {
        if (that.rxdb !== null) {
          console.log('loaded')
          clearInterval(interval)
          resolve(that.rxdb);
        } else {
          console.log('loading', that.rxdb)
        }
      }, 200)
    });
  }

  async database(rxdb: any) {
    // only allow one to be loaded
    if (this.rxdb === null) {
      this.rxdb = await rxdb()
    }
    return this.rxdb
  }

  calculate(fleet: any) {
    let that = this
    return {
      turnByTurnDirections(vehicle: any, location: any) {

      },
      TSP() { // traveling salesman problem

      }
    }
  }

  workOrder(number: number) {
    let that = this
    return {
      remove() {
        return that.rxdb.workOrder.find({
          selector: {
            number: number
          }
        }).remove()
      },
      insert(options) {
        let workOrderId = uuidv4() 
        let estimate = that.rxdb.estimate.insert({
          id: uuidv4(),
          workOrderId: workOrderId
        })
        let job = that.rxdb.job.insert({
          id: uuidv4(),
          workOrderId: workOrderId
        })
        let invoice = that.rxdb.invoice.insert({
          id: uuidv4(),
          workOrderId: workOrderId
        })

        return that.rxdb.workOrder.insert({
          ...options,
          id: workOrderId,
          number: number,
          estimateId: estimate.id,
          jobId: job.id,
          invoiceId: invoice.id,
        })
      }
    }
  }

  fleets() {
    return this.rxdb.fleet.find().exec()
  }
  locations() {
    return this.rxdb.location.find().exec()
  }
  professionals() {
    return this.rxdb.professional.find().exec()
  }
  vehicles() {
    return this.rxdb.vehicle.find().exec()
  }

  version() {
    return version // 1.0.2
  }
}