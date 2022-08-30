import { Product, ConcreteProductLocation } from './products'

export abstract class CreatorLocation {
  public abstract factoryMethod(id: string): Product;

  // public char(place: number): string {
  //   // Call the factory method to create a Product object.
  //   const product = this.factoryMethod();
  //   // Now, use the product.
  //   // return `Creator: The same creator's code has just worked with ${product.char()}`;
  //   return product.char(place)
  // }
}

export class ConcreteCreatorLocation extends CreatorLocation {
  public factoryMethod(id: string): Product {
    return new ConcreteProductLocation(id);
  }
}
