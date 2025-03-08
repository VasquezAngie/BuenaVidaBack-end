import { Router } from "express";
import UserRouterExpressInterface from "../../../Domain/interfaces/User/UserRouterExpressInterface";
import UserControllerExpress from "../Controller/UserControllerExpress";

export default class UserRouterExpress implements UserRouterExpressInterface {
  router: Router;
  private userController: UserControllerExpress;
  path: string;

  constructor(userController: UserControllerExpress) {
    this.router = Router();
    this.path = '/User'
    this.userController = userController;
    this.initializeRoutes();
  }
  
  routes(): void {
    throw new Error("Method not implemented.");
  }

  private initializeRoutes(): void {
    this.router.post("/iniciarSesion", (req, res) =>
      this.userController.iniciarSesion(req, res)
    );
    this.router.post("/registrar", (req, res) =>
      this.userController.registrarUsuario(req, res)
    );
    this.router.put("/actualizar/:id", (req, res) =>
      this.userController.actualizarUsuario(req, res)
    );
    this.router.delete("/eliminar/:id", (req, res) =>
      this.userController.eliminarUsuario(req, res)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
