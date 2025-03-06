//import { Request, Response } from 'express'

import ControllerExpressInterface from "../../../Express/domain/ControllerExpressInterface";


export default interface BuenaVidaControllerExpressInterface
  extends ControllerExpressInterface {
    getOrderById(req: Request, res: Response): void
  }