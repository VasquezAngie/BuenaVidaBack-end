import { Router } from "express";
import { CarritoControllerExpressInterface } from "../../../Domain/interfaces/Cart/CarritoControllerExpressInterface";
import { CarritoRouterExpressInterface } from "../../../Domain/interfaces/Cart/CarritoRouterInterface";

export class CarritoRouterExpress implements CarritoRouterExpressInterface {
  router: Router;
  path: string;


  constructor(private controller: CarritoControllerExpressInterface) {
    this.router = Router();
    this.path = "/Cart";
    this.configureRoutes();
  }
  
  routes(): void {
    throw new Error("Method not implemented.");
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
