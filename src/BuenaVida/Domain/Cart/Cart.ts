import AbstractCart, { CartInterface } from "../Cart/AbstractCart";

export default class Carrito extends AbstractCart {
  constructor(carritoInterface: CartInterface) {
    super(carritoInterface);
  }

  public isNull = (): boolean => false;
}
