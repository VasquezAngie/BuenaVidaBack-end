import ControllerExpressInterface from "../../../../Express/domain/ControllerExpressInterface"
import { Request, Response } from "express";

export default interface ProductControllerExpressInterface extends ControllerExpressInterface {

    getAllProducts(req: Request, res: Response): Promise<void>
    editProduct(req: Request, res: Response): Promise<void>
    deleteProduct(req: Request, res: Response): Promise<void>
    

}