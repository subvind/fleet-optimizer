import { Product, ConcreteProductJob } from './products'

export abstract class CreatorJob {
  public abstract factoryMethod(): Product;

  public char(place: number): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    // return `Creator: The same creator's code has just worked with ${product.char()}`;
    return product.char(place)
  }
}

export class ConcreteCreatorJob extends CreatorJob {
  public factoryMethod(): Product {
    return new ConcreteProductJob();
  }
}
