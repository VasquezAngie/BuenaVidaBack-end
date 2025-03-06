import OrderService from '../../Application/Service/OrderService'
import OrderUseCase from '../../Application/UseCase/OrderUseCase'
import OrderUseCasePort from '../../Domain/Port/Driver/OrderUseCasePort'

export default class OrderUseCaseFactory {
  public static create(): OrderUseCasePort {
    // const swMovieRepository = SWRepositoryFactory.create()
    // const orderService = new OrderService(swMovieRepository)
    // return new OrderUseCase(orderService)
  }
}