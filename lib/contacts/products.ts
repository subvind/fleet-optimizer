import { ConcreteProductCustomer } from '../customers/products'

export interface Product {
  first: string;
  last: string;
  customer: ConcreteProductCustomer;
  customerId(customer: ConcreteProductCustomer): any;
  get(): any;
}

export class ConcreteProductContact implements Product {
  first: string;
  last: string;
  customer: ConcreteProductCustomer;
  
  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }

  customerId(customer: ConcreteProductCustomer): any {
    this.customer = customer
  }

  get() {
    return {
      first: this.first,
      last: this.last,
      customer: this.customer
    }
  }
}
