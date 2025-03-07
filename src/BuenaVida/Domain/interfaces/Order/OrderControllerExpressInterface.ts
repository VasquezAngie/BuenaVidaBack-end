import ControllerExpressInterface from "../../../../Express/domain/ControllerExpressInterface"
import { Request, Response } from "express";

export default interface OrderControllerExpressInterface
  extends ControllerExpressInterface {
    getPedidos(req: Request, res: Response): void
    getPedidoById(req: Request, res: Response): void
    getMovieByUser(req: Request, res: Response): void
  }