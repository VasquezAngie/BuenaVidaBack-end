import { Router } from "express";
import { CarritoControllerInterface } from "../../../Domain/interfaces/CarritoControllerInterface";
import { CarritoRouterInterface } from "../../../Domain/interfaces/CarritoRouterInterface";

export class CarritoRouter implements CarritoRouterInterface {
  private router: Router;

  constructor(private controller: CarritoControllerInterface) {
    this.router = Router();
    this.configureRoutes();
  }

  configureRoutes(): Router {
    this.router.post("/add", (req, res) =>
      this.controller.añadirAlCarrito(req, res)
    );
    this.router.post("/remove", (req, res) =>
      this.controller.eliminarDelCarrito(req, res)
    );
    this.router.post("/update", (req, res) =>
      this.controller.actualizarCantidad(req, res)
    );
    this.router.post("/clear", (req, res) =>
      this.controller.vaciarCarrito(req, res)
    );
    this.router.get("/:userId", (req, res) =>
      this.controller.obtenerCarrito(req, res)
    );

    return this.router;
  }

  getRouter(): Router {
    return this.router;
  }
}
