import { Router, Request, Response } from "express";
import { UserRouterExpressInterface } from "../../../Domain/interfaces/UserRouterExpressInterface";
import { UserControllerExpressInterface } from "../../../Domain/interfaces/UserControllerExpressInterface";

export class UserRouterExpress implements UserRouterExpressInterface {
  private router: Router;
  private userController: UserControllerExpressInterface;

  constructor(userController: UserControllerExpressInterface) {
    this.router = Router();
    this.userController = userController;
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post("/register", async (req: Request, res: Response) => {
      await this.userController.createUser(req, res);
    });

    this.router.post("/login", async (req: Request, res: Response) => {
      await this.userController.loginUser(req, res);
    });

    this.router.post("/logout", async (req: Request, res: Response) => {
      await this.userController.logoutUser(req, res);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
