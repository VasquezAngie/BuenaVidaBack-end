// carritoService.ts
import AbstractProduct from "../../Domain/Product/AbstractProduct";
import { CarritoUseCases } from "../UseCase/CarritoUseCases";
import AbstractCart, { CartInterface } from "../../Domain/Cart/AbstractCart";

export class CarritoService extends AbstractCart implements CarritoUseCases {
  constructor(cartInterface: CartInterface) {
    super(cartInterface);
  }

  agregarProducto(usuarioId: number, producto: AbstractProduct): void {
    if (this.usuarioId === usuarioId) {
      this.productos.push(producto);
      this.total += producto.getprecio();
    }
  }

  eliminarProducto(usuarioId: number, productoId: number): void {
    if (this.usuarioId === usuarioId) {
      this.productos = this.productos.filter(
        (producto) => producto.getId() !== productoId
      );
      this.total = this.productos.reduce(
        (acc, producto) => acc + producto.getprecio(),
        0
      );
    }
  }

  obtenerCarrito(usuarioId: number): AbstractProduct[] {
    return this.usuarioId === usuarioId ? this.productos : [];
  }

  calcularTotal(usuarioId: number): number {
    return this.usuarioId === usuarioId ? this.total : 0;
  }

  vaciarCarrito(usuarioId: number): void {
    if (this.usuarioId === usuarioId) {
      this.productos = [];
      this.total = 0;
    }
  }
}
