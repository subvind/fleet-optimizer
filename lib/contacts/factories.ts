import { Product, ConcreteProductContact } from './products'

export abstract class CreatorContact {
  public abstract factoryMethod(first: string, last: string): Product;

  // public char(place: number): string {
  //   // Call the factory method to create a Product object.
  //   const product = this.factoryMethod();
  //   // Now, use the product.
  //   // return `Creator: The same creator's code has just worked with ${product.char()}`;
  //   return product.char(place)
  // }
}

export class ConcreteCreatorContact extends CreatorContact {
  public factoryMethod(first: string, last: string): Product {
    return new ConcreteProductContact(first, last);
  }
}
