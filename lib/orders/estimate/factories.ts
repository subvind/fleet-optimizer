import { Product, ConcreteProductEstimate } from './products'

export abstract class CreatorEstimate {
  public abstract factoryMethod(): Product;

  public char(place: number): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    // return `Creator: The same creator's code has just worked with ${product.char()}`;
    return product.char(place)
  }
}

export class ConcreteCreatorEstimate extends CreatorEstimate {
  public factoryMethod(): Product {
    return new ConcreteProductEstimate();
  }
}
