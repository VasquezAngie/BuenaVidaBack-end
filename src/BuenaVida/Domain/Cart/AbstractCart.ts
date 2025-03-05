import AbstractProduct from "../Product/AbstractProduct";

export default class AbstractCart {
  protected usuarioId: number;
  protected productos: AbstractProduct[];
  protected total: number;
  constructor(cartInterface: CartInterface) {
    this.usuarioId = cartInterface.usuarioId;
    this.productos = cartInterface.productos;
    this.total = cartInterface.total;
  }
  public getUsuarioId = (): number => this.usuarioId;
  public getProductos = (): AbstractProduct[] => this.productos;
}
export interface CartInterface {
  usuarioId: number;
  productos: AbstractProduct[];
  total: number;
}
