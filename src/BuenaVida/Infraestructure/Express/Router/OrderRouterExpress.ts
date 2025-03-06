import { Router } from "express";
import OrderRouterExpressInterface from "../../../Domain/interfaces/BuenaVidaRouteExpress";
import BuenaVidaControllerExpressInterface from "../../../Domain/interfaces/BuenaVidaControllerExpressInterface";

export default class OrderRouterExpress implements OrderRouterExpressInterface {
    router: Router
    path: string
  
    constructor(private readonly orderController: BuenaVidaControllerExpressInterface) {
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
        //this.router.get('/vida/mona', this.orderController.getOrderById.bind(this.orderController))
      }
  
  }