import { Router } from 'express'
import BuenaVidaRouterExpressInterface from '../../../Domain/interfaces/BuenaVidaRouteExpress'
import BuenaVidaControllerExpressInterface from '../../../Domain/interfaces/BuenaVidaControllerExpressInterface'

export default class BuenaVidaRouterExpress implements BuenaVidaRouterExpressInterface {
  router: Router
  path: string

  constructor(private readonly BuenaVidaController: BuenaVidaControllerExpressInterface) {
    this.router = Router()
    this.path = '/BuenaVida'
    this.routes()
  }

  public routes(): void {
    this.getProducts()
  }

  public getProducts(): void {
    this.router.get('/catalogo', this.BuenaVidaController.getProducts.bind(this.BuenaVidaController))
  }

}
