import ControllerExpressInterface from "../../../../Express/domain/ControllerExpressInterface"

export default interface OrderControllerExpressInterface
  extends ControllerExpressInterface {
    creat(req: Request, res: Response): void
    getMovieById(req: Request, res: Response): void
  }