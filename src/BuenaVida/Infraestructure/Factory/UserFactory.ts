import UserUseCasePort from "../../Application/UseCase/UserUseCase";
import { UserControllerExpress } from "../Express/Controller/UserControllerExpress";
import { UserRouterExpress } from "../Express/Router/UserRouterExpress";

export class UserFactory {
  static createUserModule(userUseCase: UserUseCasePort): UserRouterExpress {
    const userController = new UserControllerExpress(userUseCase);
    return new UserRouterExpress(userController);
  }
}
