import { Router } from "express";
import OrderRouterExpressInterface from "../../../Domain/interfaces/Order/OrderRouterExpressInterface";
import OrderControllerExpressInterface from '../../../Domain/interfaces/Order/OrderControllerExpressInterface';

export default class OrderRouterExpress implements OrderRouterExpressInterface {
    
    router: Router;
    path: string;

    constructor(private readonly orderController: OrderControllerExpressInterface) {
        this.router = Router()
        this.path = '/Pedido'
        this.routes()
    }

    public routes(): void {
        this.initializeRoutes()
    }
    
    public initializeRoutes(): void {
      console.log("rutas de pedidos");
        this.router.post("/pedidos", (req, res) =>
          this.orderController.getPedidos(req, res)
        );
        this.router.post("/pedido/:id", (req, res) =>
          this.orderController.getPedidoById(req, res)
        );
        this.router.put("/pedido/:user", (req, res) =>
          this.orderController.getPedidoByUser(req, res)
        );
    }
  
}