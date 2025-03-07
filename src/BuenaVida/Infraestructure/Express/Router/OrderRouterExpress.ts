import { Router } from "express";
import OrderUseCasePort from "../../../Domain/Port/Driver/OrderUseCasePort";

export default class OrderRouterExpress implements OrderRouterExpressInterface {
    router: Router
    path: string
  
    constructor(private readonly orderUseCase: OrderUseCasePort) {
      this.router = Router()
      this.path = '/BuenaVida'
      this.routes()
    }

    public routes(): void {
        this.getOrderById()
    }

    getProducts(): void {
        throw new Error("Method not implemented.");
    }
  
    public getOrderById(): void {
        this.router.get('/vida/mona', this.orderUseCase.crearOrden.bind(this.orderUseCase))
    }
  
  }