import RouterExpressInterface from "../../../../Express/domain/RouterExpressInterface";
import UserControllerExpress from "../../Express/Controller/UserControllerExpress";
import UserRouterExpress from "../../Express/Router/UserRouterExpress";
import UserUseCaseFactory from "./UserUseCaseFactory";

export default class OrderUserFactory {
    public static create(): RouterExpressInterface {
      const userUseCase = UserUseCaseFactory.create();
      const userController = new UserControllerExpress(userUseCase);
      return new UserRouterExpress(userController);
    }
  }