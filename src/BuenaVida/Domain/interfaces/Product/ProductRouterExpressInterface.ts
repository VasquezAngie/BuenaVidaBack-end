import RouterExpressInterface from "../../../../Express/domain/RouterExpressInterface";

export default interface ProductRouterExpressInterface extends RouterExpressInterface {
    initializeRoutes(): void
  }