import { ConcreteCreatorFleet } from './fleets/factories';
import { ConcreteProductFleet } from './fleets/products';

import { Order, ConcreteCreatorEstimate, ConcreteCreatorJob, ConcreteCreatorInvoice } from './orders/order'

import { CreatorCustomer, ConcreteCreatorCustomer } from './customers/factories'
import { ConcreteProductCustomer } from './customers/products'

export class FleetOptimizer {
  private fleets: ConcreteProductFleet[] = [];
  private orders: Order[] = [];
  private customers: ConcreteProductCustomer[] = [];
  private static instance: FleetOptimizer;

  private constructor() {}

  public static getInstance(): FleetOptimizer {
    if (!FleetOptimizer.instance) {
      FleetOptimizer.instance = new FleetOptimizer();
    }

    return FleetOptimizer.instance;
  }

  public get() {
    return {
      fleets: this.fleets,
      orders: this.orders,
      customers: this.customers
    }
  }

  // system(id: string) {
  //   return {
  //     add: (config: any) => {

  //     },
  //     join: (address: string) => {

  //     }
  //   }
  // }

  fleet(fleetId: string) {
    let that = this
    return {
      add() {
        const creator = new ConcreteCreatorFleet()
        let product = creator.factoryMethod(fleetId)
        that.fleets.push(product)
        return product
      },
      customer(customerId: string) {
        return {
          add() {
            const creator = new ConcreteCreatorCustomer()
            let product = creator.factoryMethod(customerId)
            that.customers.push(product)
            return product
          }
        }
      },
      order(orderId: number) {
        return {
          add() {
            let estimateCreator = new ConcreteCreatorEstimate()
            let jobCreator = new ConcreteCreatorJob()
            let invoiceCreator = new ConcreteCreatorInvoice()
            let estimate = estimateCreator.factoryMethod()
            let job = jobCreator.factoryMethod()
            let invoice = invoiceCreator.factoryMethod()
            let product = new Order(orderId, estimate, job, invoice)
            that.orders.push(product)
            return product
          },
          customerId(id: string) {
            let order = that.orders.filter((value) => {
              return value.get().id === orderId
            })[0]

            let customer = that.customers.filter((value) => {
              return value.get().id === id
            })[0]

            if (order && customer) {
              order.customerId(customer)
            }
          }
        }
      }
    }
  }
}