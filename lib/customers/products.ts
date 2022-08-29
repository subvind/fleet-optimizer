
export interface Product {
  id: string;
  get(): any;
}

export class ConcreteProductCustomer implements Product {
  id: string
  
  constructor(id: string) {
    this.id = id
  }

  get() {
    return {
      id: this.id
    }
  }
}
