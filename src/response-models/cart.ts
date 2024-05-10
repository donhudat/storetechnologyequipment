import ProductResponse from "./product";
import UserReponse from "./user";

export default class CartResponse {
  id: number;
  user?: UserReponse;
  product: ProductResponse;
  quantity: number;
  total: number;

  constructor(id: number, product: ProductResponse, quantity: number, total: number, user?: UserReponse) {
    this.id = id;
    this.user = user;
    this.product = product;
    this.total = total;
    this.quantity = quantity;
  }
}