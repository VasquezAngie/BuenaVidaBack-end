import AbstractProduct from "../../Domain/Product/AbstractProduct";

export interface CarritoUseCases {
  agregarProducto(usuarioId: number, producto: AbstractProduct): void;
  eliminarProducto(usuarioId: number, productoId: number): void;
  obtenerCarrito(usuarioId: number): AbstractProduct[];
  calcularTotal(usuarioId: number): number;
  vaciarCarrito(usuarioId: number): void;
}
