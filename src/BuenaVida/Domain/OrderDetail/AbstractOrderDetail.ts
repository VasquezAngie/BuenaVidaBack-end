import { ProductInterface } from "../Product/AbstractProduct";

export default abstract class AbstractOrderDetail {
  protected idDetalle: number;
  protected idPedido: number;
  protected producto: ProductInterface;
  protected cantidad: number;
  protected precioUnitario: number;
  protected subtotal: number;

  constructor(detallePedidoInterface: OrderDetailInterface) {
    this.idDetalle = detallePedidoInterface.idDetalle;
    this.idPedido = detallePedidoInterface.idPedido;
    this.producto = detallePedidoInterface.producto;
    this.cantidad = detallePedidoInterface.cantidad;
    this.precioUnitario = detallePedidoInterface.precioUnitario;
    this.subtotal = detallePedidoInterface.subtotal;
  }

  public abstract isNull(): boolean;

  public getIdDetalle(): number {
    return this.idDetalle;
  }

  public getIdPedido(): number {
    return this.idPedido;
  }

  public getProducto(): ProductInterface {
    return this.producto;
  }

  public getCantidad(): number {
    return this.cantidad;
  }

  public getPrecioUnitario(): number {
    return this.precioUnitario;
  }

  public getSubtotal(): number {
    return this.subtotal;
  }

  public setIdDetalle(idDetalle: number): void {
    this.idDetalle = idDetalle;
  }

  public setIdPedido(idPedido: number): void {
    this.idPedido = idPedido;
  }

  public setProducto(producto: ProductInterface): void {
    this.producto = producto;
    this.precioUnitario = producto.precio;
    this.calcularSubtotal();
  }

  public setCantidad(cantidad: number): void {
    this.cantidad = cantidad;
    this.calcularSubtotal();
  }

  public setPrecioUnitario(precioUnitario: number): void {
    this.precioUnitario = precioUnitario;
    this.calcularSubtotal();
  }

  private calcularSubtotal(): void {
    this.subtotal = this.cantidad * this.precioUnitario;
  }
}

export interface OrderDetailInterface {
  idDetalle: number;
  idPedido: number;
  producto: ProductInterface;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}