import { ConcreteProductCustomer } from '../customers/products'

export interface Product {
  id: string;
  latitude: number;
  longitude: number;
  customer: ConcreteProductCustomer;
  customerId(customer: ConcreteProductCustomer): any;
  coordinates(options: any): any;
  get(): any;
}

export class ConcreteProductLocation implements Product {
  id: string;
  latitude: number;
  longitude: number;
  customer: ConcreteProductCustomer;
  
  constructor(id: string) {
    this.id = id
  }

  customerId(customer: ConcreteProductCustomer): any {
    this.customer = customer
  }

  coordinates(options: any) {
    this.latitude = options.latitude
    this.longitude = options.longitude
  }

  get() {
    return {
      id: this.id,
      latitude: this.latitude,
      longitude: this.longitude,
      customer: this.customer
    }
  }
}
