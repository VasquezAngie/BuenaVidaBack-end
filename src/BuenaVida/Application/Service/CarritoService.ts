import { CarritoServicioInterface } from "../../Domain/interfaces/Cart/CarritoServiceInterface";
import { CarritoRepositoryPort } from "../../Domain/Port/Driven/CarritoRepositoryPort";

export class CarritoService implements CarritoServicioInterface {
  constructor(private carritoRepositorio: CarritoRepositoryPort) {}

  async agregarProducto(idUsuario: number, idProducto: number): Promise<void> {
    await this.carritoRepositorio.insertarProducto(idUsuario, idProducto);
  }

  async eliminarProducto(idUsuario: number, idProducto: number): Promise<void> {
    await this.carritoRepositorio.eliminarProducto(idUsuario, idProducto);
  }

  async actualizarCantidad(
    idUsuario: number,
    idProducto: number,
    cantidad: number
  ): Promise<void> {
    await this.carritoRepositorio.actualizarCantidad(
      idUsuario,
      idProducto,
      cantidad
    );
  }

  async vaciarCarrito(idUsuario: number): Promise<void> {
    await this.carritoRepositorio.vaciarCarrito(idUsuario);
  }

  async obtenerCarrito(idUsuario: number): Promise<any> {
    return await this.carritoRepositorio.obtenerCarrito(idUsuario);
  }
}
