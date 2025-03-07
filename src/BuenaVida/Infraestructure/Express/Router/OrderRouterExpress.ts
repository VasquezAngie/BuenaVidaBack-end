import { Router } from "express";
import OrderUseCasePort from "../../../Domain/Port/Driver/OrderUseCasePort";
import OrderRouterExpressInterface from "../../../Domain/interfaces/Order/OrderExpressInterface";
import OrderControllerExpressInterface from '../../../Domain/interfaces/Order/OrderControllerExpressInterface';

export default class OrderRouterExpress implements OrderRouterExpressInterface {
    
    router: Router;
    path: string;

    constructor(private readonly orderController: OrderControllerExpressInterface) {
        this.router = Router()
        this.path = '/movies'
        this.routes()
    }

    public routes(): void {
        this.initializeRoutes()
    }
    
    public initializeRoutes(): void {
        this.router.post("/pedidos", (req, res) =>
          this.orderController.getPedidos(req, res)
        );
        this.router.post("/pedido/:id", (req, res) =>
          this.orderController.getPedidoById(req, res)
        );
        this.router.put("/pedido/:user", (req, res) =>
          this.orderController.getMovieByUser(req, res)
        );
    }
  
}