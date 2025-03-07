import { Request, Response } from "express";

export interface UserControllerExpressInterface {
  createUser(req: Request, res: Response): Promise<Response>;
  loginUser(req: Request, res: Response): Promise<Response>;
  logoutUser(req: Request, res: Response): Promise<Response>;
}
