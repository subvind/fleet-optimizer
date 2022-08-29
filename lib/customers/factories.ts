import { Product, ConcreteProductCustomer } from './products'

export abstract class CreatorCustomer {
  public abstract factoryMethod(id: string): Product;

  // public char(place: number): string {
  //   // Call the factory method to create a Product object.
  //   const product = this.factoryMethod();
  //   // Now, use the product.
  //   // return `Creator: The same creator's code has just worked with ${product.char()}`;
  //   return product.char(place)
  // }
}

export class ConcreteCreatorCustomer extends CreatorCustomer {
  public factoryMethod(id: string): Product {
    return new ConcreteProductCustomer(id);
  }
}
