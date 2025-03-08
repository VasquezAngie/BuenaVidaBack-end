import { Request, Response } from "express";
import { CarritoControllerExpressInterface } from "../../../Domain/interfaces/Cart/CarritoControllerExpressInterface";
import { CarritoUseCasePort } from "../../../Domain/Port/Driver/CarritoUseCasePort";

export class CarritoControllerExpress implements CarritoControllerExpressInterface {
  constructor(private cartUseCase: CarritoUseCasePort) {}

  async añadirAlCarrito(req: Request, res: Response): Promise<void> {
    try {
      const { userId, productId } = req.body;
      await this.cartUseCase.agregarProducto(userId, productId);
      res.status(200).json({ message: "Producto agregado al carrito" });
    } catch (error) {
      res.status(500).json({ error: "Error al agregar al carrito" });
    }
  }

  async eliminarDelCarrito(req: Request, res: Response): Promise<void> {
    try {
      const { userId, productId } = req.body;
      await this.cartUseCase.eliminarProducto(userId, productId);
      res.status(200).json({ message: "Producto eliminado del carrito" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar del carrito" });
    }
  }

  async actualizarCantidad(req: Request, res: Response): Promise<void> {
    try {
      const { userId, productId, quantity } = req.body;
      await this.cartUseCase.actualizarCantidad(userId, productId, quantity);
      res.status(200).json({ message: "Cantidad actualizada en el carrito" });
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la cantidad" });
    }
  }

  async vaciarCarrito(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      await this.cartUseCase.vaciarCarrito(userId);
      res.status(200).json({ message: "Carrito limpiado" });
    } catch (error) {
      res.status(500).json({ error: "Error al limpiar el carrito" });
    }
  }

  async obtenerCarrito(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const cart = await this.cartUseCase.obtenerCarrito(Number(userId));
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el carrito" });
    }
  }
}
