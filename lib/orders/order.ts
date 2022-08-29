import { CreatorEstimate, ConcreteCreatorEstimate } from './estimate/factories'
import { CreatorJob, ConcreteCreatorJob } from './job/factories'
import { CreatorInvoice, ConcreteCreatorInvoice } from './invoice/factories'

import { ConcreteProductEstimate } from './estimate/products'
import { ConcreteProductJob } from './job/products'
import { ConcreteProductInvoice } from './invoice/products'

import { ConcreteProductCustomer } from '../customers/products'

enum STATUS {
  ESTIMATE,
  JOB,
  INVOICE
}

export {
  ConcreteCreatorEstimate,
  ConcreteCreatorJob,
  ConcreteCreatorInvoice
}

export class Order {
  private id: number;
  private customer: ConcreteProductCustomer;
  private status: STATUS;
  private estimate: ConcreteProductEstimate;
  private job: ConcreteProductJob;
  private invoice: ConcreteProductInvoice;
  public circularReference: ComponentWithBackReference;

  constructor (orderId: number, estimate: ConcreteProductEstimate, job: ConcreteProductJob, invoice: ConcreteProductInvoice) {
    this.id = orderId
    this.estimate = estimate
    this.job = job
    this.invoice = invoice
  }

  public clone(newId): this {
    const clone = Object.create(this);

    clone.id = newId
    clone.estimate = this.estimate
    clone.job = this.job
    clone.invoice = this.invoice

    clone.circularReference = {
      ...this.circularReference,
      order: { ...this }, // prototype
    };

    return clone;
  }

  public get (): any {
    return {
      id: this.id,
      customer: this.customer,
      status: this.status,
      estimate: this.estimate,
      job: this.job,
      invoice: this.invoice
    }
  }

  public customerId(customer: ConcreteProductCustomer): any {
    this.customer = customer
  }

  public toggle(change: STATUS): any {
    this.status = change
    return this.status
  }

  static spawn (orderId: number, estimate: ConcreteProductEstimate, job: ConcreteProductJob, invoice: ConcreteProductInvoice) {
    // returns init prototype
    let order = new Order(orderId, estimate, job, invoice) 
    
    // change
    order.toggle(STATUS.ESTIMATE)
    order.circularReference = new ComponentWithBackReference(order);

    return order
  }

  static respawn (newId: number, order: Order) {
    // returns next prototype
    order = order.clone(newId) 

    // change
    order.toggle(STATUS.INVOICE)

    return order
  }
}

export class ComponentWithBackReference {
  public order; // prototype

  constructor(order: Order) {
    this.order = order;
  }
}