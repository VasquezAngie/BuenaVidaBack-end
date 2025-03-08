import { Request, Response } from "express";
import ControllerExpressInterface from "../../../../Express/domain/ControllerExpressInterface";

export interface CarritoControllerExpressInterface extends ControllerExpressInterface {
  añadirAlCarrito(req: Request, res: Response): Promise<void>;
  eliminarDelCarrito(req: Request, res: Response): Promise<void>;
  actualizarCantidad(req: Request, res: Response): Promise<void>;
  vaciarCarrito(req: Request, res: Response): Promise<void>;
  obtenerCarrito(req: Request, res: Response): Promise<void>;
}
