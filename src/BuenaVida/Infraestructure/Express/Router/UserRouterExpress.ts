import { Router } from "express";
import UserRouterExpressInterface from "../../../Domain/interfaces/UserRouterExpressInterface";
import UserControllerExpress from "../Controller/UserControllerExpress";

export default class UserRouterExpress implements UserRouterExpressInterface {
  private router: Router;
  private userController: UserControllerExpress;

  constructor(userController: UserControllerExpress) {
    this.router = Router();
    this.userController = userController;
    this.initializeRoutes();
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
