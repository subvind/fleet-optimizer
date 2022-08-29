
export interface Product {
  id: string;
  get(): any;
}

export class ConcreteProductFleet implements Product {
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
