export interface CarritoServicioInterface {
  agregarProducto(idUsuario: number, idProducto: number): Promise<void>;
  eliminarProducto(idUsuario: number, idProducto: number): Promise<void>;
  actualizarCantidad(
    idUsuario: number,
    idProducto: number,
    cantidad: number
  ): Promise<void>;
  vaciarCarrito(idUsuario: number): Promise<void>;
  obtenerCarrito(idUsuario: number): Promise<any>;
}
