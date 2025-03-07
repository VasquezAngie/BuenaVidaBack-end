import RouterExpressInterface from "../../../Express/domain/RouterExpressInterface"
import OrderControllerExpress from "../Express/Controller/OrderControllerExpress"
import OrderRouterExpress from "../Express/Router/OrderRouterExpress"
import OrderUseCaseFactory from "./OrderUseCaseFactory"

export default class OrderFactory {
        public static create(): RouterExpressInterface {
          const orderUseCase = OrderUseCaseFactory.create()
          const orderController = new OrderControllerExpress(orderUseCase)
          return new OrderRouterExpress(orderController)
        }
}