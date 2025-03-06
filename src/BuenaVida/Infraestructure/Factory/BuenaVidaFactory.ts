import RouterExpressInterface from "../../../Express/domain/RouterExpressInterface"
import BuenaVidaRouterExpress from '../Express/Router/BuenaVidaRouterExpress'
import BuenaVidaControllerExpress from "../Express/Controller/BuenaVidaControllerExpress"
import OrderUseCase from "../../Application/UseCase/OrderUseCase"
import OrderUseCaseFactory from "./OrderUseCaseFactory"

export default class BuenaVidaFactory {
    public static create(): RouterExpressInterface {
      const orderUseCase = OrderUseCaseFactory.create()
      const movieController = new BuenaVidaControllerExpress(orderUseCase)
      return new BuenaVidaRouterExpress(movieController)
    }
  }