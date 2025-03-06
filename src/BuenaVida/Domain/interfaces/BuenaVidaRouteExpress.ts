import RouterExpressInterface from "../../../Express/domain/RouterExpressInterface";

export default interface OrderRouterExpressInterface
extends RouterExpressInterface {
  getProducts(): void
  getOrderById(): void
}
