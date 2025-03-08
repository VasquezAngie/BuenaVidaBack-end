import { Request, Response } from "express";

export interface CarritoControllerInterface {
  añadirAlCarrito(req: Request, res: Response): Promise<void>;
  eliminarDelCarrito(req: Request, res: Response): Promise<void>;
  actualizarCantidad(req: Request, res: Response): Promise<void>;
  vaciarCarrito(req: Request, res: Response): Promise<void>;
  obtenerCarrito(req: Request, res: Response): Promise<void>;
}
