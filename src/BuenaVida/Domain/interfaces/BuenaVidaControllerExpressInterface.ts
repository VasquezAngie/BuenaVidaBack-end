//import { Request, Response } from 'express'

import ControllerExpressInterface from "../../../Express/domain/ControllerExpressInterface";


export default interface BuenaVidaControllerExpressInterface
  extends ControllerExpressInterface {
    addProduct(req: Request, res: Response): void
  }