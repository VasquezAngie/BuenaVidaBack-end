import { ProductServiceInterface } from "../../Domain/interfaces/Product/ProductServiceInterface";
import ProductUserCasePort from "../../Domain/Port/Driver/ProductUseCasePort";
import Product from '../../Domain/Product/Product';

export default class ProductUseCase implements ProductUserCasePort {

    constructor(private productService: ProductServiceInterface){}

    async getAllProducts(): Promise<Product[]> {
        return await this.productService.getAllProducts()
    }
    async editProduct(id: number, product:Product): Promise<boolean> {
        return await this.productService.editProduct(id, product)
    }
    async deleteProduct(id: number): Promise<boolean> {
        return await this.productService.deleteProduct(id)
    }
    
}