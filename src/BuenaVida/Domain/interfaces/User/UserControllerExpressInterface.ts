import { Request, Response } from "express";

export default interface UserControllerExpressInterface {
  iniciarSesion(req: Request, res: Response): Promise<void>;
  registrarUsuario(req: Request, res: Response): Promise<void>;
  actualizarUsuario(req: Request, res: Response): Promise<void>;
  eliminarUsuario(req: Request, res: Response): Promise<void>;
}
