import { ConcreteCreatorFleet } from './fleets/factories';
import { ConcreteProductFleet } from './fleets/products';

import { Order, ConcreteCreatorEstimate, ConcreteCreatorJob, ConcreteCreatorInvoice } from './orders/order'

import { CreatorCustomer, ConcreteCreatorCustomer } from './customers/factories'
import { ConcreteProductCustomer } from './customers/products'

import { CreatorContact, ConcreteCreatorContact } from './contacts/factories'
import { ConcreteProductContact } from './contacts/products'

import { CreatorLocation, ConcreteCreatorLocation } from './locations/factories'
import { ConcreteProductLocation } from './locations/products'

export class FleetOptimizer {
  private fleets: ConcreteProductFleet[] = [];
  private orders: Order[] = [];
  private customers: ConcreteProductCustomer[] = [];
  private contacts: ConcreteProductContact[] = [];
  private locations: ConcreteProductLocation[] = [];
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
      customers: this.customers,
      contacts: this.contacts,
      locations: this.locations,
    }
  }

  fleet(fleetId: string) {
    let that = this
    return {
      add() {
        const creator = new ConcreteCreatorFleet()
        let product = creator.factoryMethod(fleetId)
        that.fleets.push(product)
        return that.fleet(fleetId)
      },
    }
  }

  order(orderId: number): any {
    let that = this
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
        return that.order(orderId)
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

  customer(customerId: string) {
    let that = this
    return {
      add() {
        const creator = new ConcreteCreatorCustomer()
        let product = creator.factoryMethod(customerId)
        that.customers.push(product)
        return that.customer(customerId)
      }
    }
  }

  contact(first: string, last: string) {
    let that = this
    return {
      add() {
        const creator = new ConcreteCreatorContact()
        let product = creator.factoryMethod(first, last)
        that.contacts.push(product)
        return that.contact(first, last)
      },
      customerId(id: string) {
        let contact = that.contacts.filter((value) => {
          return value.get().first === first && value.get().last === last
        })[0]

        let customer = that.customers.filter((value) => {
          return value.get().id === id
        })[0]

        if (contact && customer) {
          contact.customerId(customer)
        }
      }
    }
  }

  location(locationId: string) {
    let that = this
    return {
      add() {
        const creator = new ConcreteCreatorLocation()
        let product = creator.factoryMethod(locationId)
        that.locations.push(product)
        return that.location(locationId)
      },
      customerId(id: string) {
        let location = that.locations.filter((value) => {
          return value.get().id === locationId
        })[0]

        let customer = that.customers.filter((value) => {
          return value.get().id === id
        })[0]

        if (location && customer) {
          location.customerId(customer)
        }
      },
      coordinates(options: any) {
        let location = that.locations.filter((value) => {
          return value.get().id === locationId
        })[0]

        if (location) {
          location.coordinates(options)
        }
      }
    }
  }
}