import { ProductServiceInterface } from '../../Domain/interfaces/Product/ProductServiceInterface';
import ProductRepositoryPort from '../../Domain/Port/Driven/ProductRepositoryPort';
import Product from '../../Domain/Product/Product';

export default class ProductService implements ProductServiceInterface {

    constructor(private productRepository: ProductRepositoryPort) {
    }


    async deleteProduct(id: number): Promise<boolean> {
    return this.productRepository.deleteProduct(id);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAllProduct();
  }

  async getProductId(idProduct: number): Promise<Product> {
    return this.productRepository.getProductById(idProduct);
  }

  async enPromocion(idProduct: number): Promise<boolean> {
    const product = await this.productRepository.getProductById(idProduct);
    return product.getenpromocion() === 1;
  }

  async getDescuento(idProduct: number): Promise<number> {
    const product = await this.productRepository.getProductById(idProduct);
    return product.getDescuento();
  }

  async editProduct(idProduct: number, product: Product): Promise<boolean> {
    return await this.productRepository.editProduct(idProduct, product);
  }

  async addProduct(product: Product): Promise<boolean> {
    return this.productRepository.createProduct(product);
  }

    
}