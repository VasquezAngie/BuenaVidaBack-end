import OrderInterface from "../../Domain/Order/AbstractOrder";
import { ProductInterface } from "../../Domain/Product/AbstractProduct";

export default class OrderUseCases {
  private order: OrderInterface;

  constructor(order: OrderInterface) {
    this.order = order;
  }
  // Agregar un producto a la orden
  public agregarProducto(producto: ProductInterface): void {
    const productos = this.order.getProductos();
    productos.push(producto);
    this.order.setProductos(productos);
    this.calcularTotal();
  }
  // Eliminar un producto de la orden
  public eliminarProducto(productoId: number): void {
    const productos = this.order
      .getProductos()
      .filter((p) => p.id !== productoId);
    this.order.setProductos(productos);
    this.calcularTotal();
  }
  // Calcular el total de la orden
  public calcularTotal(): void {
    const total = this.order
      .getProductos()
      .reduce((sum, producto) => sum + producto.precio, 0);
    this.order.setTotal(total);
  }
  // Obtener el estado de envío
  public getEstadoEnvio(): string {
    return this.order.getEstado();
  }
  // Modificar la cantidad de un producto
  public modificarCantidad(productoId: number, cantidad: number): void {
    const productos = this.order.getProductos().map((p) => {
      if (p.id === productoId) {
        return { ...p, cantidad };
      }
      return p;
    });
    this.order.setProductos(productos);
    this.calcularTotal();
  }
}
