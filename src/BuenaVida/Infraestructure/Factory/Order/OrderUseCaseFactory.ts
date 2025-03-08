import OrderService from '../../../Application/Service/OrderService'
import OrderUseCase from '../../../Application/UseCase/OrderUseCase'
import OrderUseCasePort from '../../../Domain/Port/Driver/OrderUseCasePort'
import OrderRepositoryFactory from './OrderRepositoryFactory';

export default class OrderUseCaseFactory {
  public static create(): OrderUseCasePort {
    const orderRepository = OrderRepositoryFactory.create();
    const orderService = new OrderService(orderRepository)
    return new OrderUseCase(orderService);
  }
}