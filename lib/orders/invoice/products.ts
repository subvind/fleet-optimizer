
export interface Product {
  family: string;
  char(place: number): string;
}

export class ConcreteProductInvoice implements Product {
  family: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

  public char(place: number): string {
    let c = this.family.split('')
    place = (place - 1) % c.length // limit boundry to family length
    return c[place];
  }
}
