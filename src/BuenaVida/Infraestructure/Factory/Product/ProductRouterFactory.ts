import RouterExpressInterface from '../../../../Express/domain/RouterExpressInterface';
import ProductControllerExpress from '../../Express/Controller/ProductControllerExpress';
import ProductRouterExpress from '../../Express/Router/ProductRouterExpress';
import ProductUseCaseFactory from './ProductUseCaseFactory';

export default class ProductRouterFactory {
    public static create(): RouterExpressInterface {
      const productUseCase = ProductUseCaseFactory.create();
      const productController = new ProductControllerExpress(productUseCase);
      return new ProductRouterExpress(productController);
    }
  }