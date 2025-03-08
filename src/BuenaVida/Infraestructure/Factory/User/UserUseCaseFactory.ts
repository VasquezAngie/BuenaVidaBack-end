import UserService from '../../../Application/Service/UserService';
import UserUseCase from '../../../Application/UseCase/UserUseCase';
import UserUseCasePort from '../../../Domain/Port/Driver/UserUseCasePort';
import UserRepositoryFactory from './UserRepositoryFactory';

export default class UserUseCaseFactory {
    public static create(): UserUseCasePort {
      const userRepository = UserRepositoryFactory.create();
      const userService = new UserService(userRepository)
      return new UserUseCase(userService);
    }
  }