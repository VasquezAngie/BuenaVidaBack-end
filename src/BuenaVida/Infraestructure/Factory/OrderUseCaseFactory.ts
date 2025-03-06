import OrderRepository from '../db/OrderRepository';
import OrderService from '../../Application/Service/OrderService'
import OrderUseCase from '../../Application/UseCase/OrderUseCase'
import OrderUseCasePort from '../../Domain/Port/Driver/OrderUseCasePort'

export default class OrderUseCaseFactory {
    public static create(): OrderUseCasePort {
      const orderRepository = new OrderRepository();
      return new OrderUseCase(orderRepository);
    }
  }