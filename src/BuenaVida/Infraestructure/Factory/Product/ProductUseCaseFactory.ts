import ProductService from "../../../Application/Service/ProductService";
import ProductUseCase from "../../../Application/UseCase/ProductUseCase";
import ProductUseCasePort from "../../../Domain/Port/Driver/ProductUseCasePort";
import ProductRepositoryFactory from "./ProductRepositoryFactory";

export default class ProductUseCaseFactory {
    public static create(): ProductUseCasePort {
      const orderRepository = ProductRepositoryFactory.create();
      const orderService = new ProductService(orderRepository)
      return new ProductUseCase(orderService);
    }
  }