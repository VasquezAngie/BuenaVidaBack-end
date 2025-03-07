import RouterExpressInterface from "../../../../Express/domain/RouterExpressInterface";

export default interface OrderRouterExpressInterface
  extends RouterExpressInterface {
    getMovies(): void
  }