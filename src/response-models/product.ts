

export default class ProductResponse {
  id: number;
  name: string;
  price: number;
  sale_price: number;
  img: string;


  constructor(id: number, name: string, price: number, sale_price: number, img: string) {
    this.id = id
    this.name = name
    this.price = price
    this.sale_price = sale_price
    this.img = img
  }

}


