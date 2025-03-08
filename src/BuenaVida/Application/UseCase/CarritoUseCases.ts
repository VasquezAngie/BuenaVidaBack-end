import { CarritoUseCaseInterface } from "../../Domain/Port/Driver/CarritoUseCasePort";
import { CarritoService } from "../Service/CarritoService";

export class CarritoUseCase implements CarritoUseCaseInterface {
  constructor(private carritoServicio: CarritoService) {}

  async agregarProducto(idUsuario: number, idProducto: number): Promise<void> {
    await this.carritoServicio.agregarProducto(idUsuario, idProducto);
  }

  async eliminarProducto(idUsuario: number, idProducto: number): Promise<void> {
    await this.carritoServicio.eliminarProducto(idUsuario, idProducto);
  }

  async actualizarCantidad(
    idUsuario: number,
    idProducto: number,
    cantidad: number
  ): Promise<void> {
    await this.carritoServicio.actualizarCantidad(
      idUsuario,
      idProducto,
      cantidad
    );
  }

  async vaciarCarrito(idUsuario: number): Promise<void> {
    await this.carritoServicio.vaciarCarrito(idUsuario);
  }

  async obtenerCarrito(idUsuario: number): Promise<any> {
    return await this.carritoServicio.obtenerCarrito(idUsuario);
  }
}
