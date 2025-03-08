import ControllerExpressInterface from "../../../../Express/domain/ControllerExpressInterface"
import { Request, Response } from "express";

export default interface OrderControllerExpressInterface
  extends ControllerExpressInterface {
    getPedidos(req: Request, res: Response): Promise<void>
    getPedidoById(req: Request, res: Response): Promise<void>
    getPedidoByUser(req: Request, res: Response): Promise<void>
    createOrder(req: Request, res: Response): Promise<void>
    getEstado(req: Request, res: Response): Promise<void>
  }