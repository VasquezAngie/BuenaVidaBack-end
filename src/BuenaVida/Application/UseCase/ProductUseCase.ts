import ProductControllerExpressInterface from "../../Domain/interfaces/Product/ProductControllerExpressInterface";
import { ProductServiceInterface } from "../../Domain/interfaces/Product/ProductServiceInterface";
import Product from '../../Domain/Product/Product';

export default class ProductUseCase implements ProductControllerExpressInterface {

    constructor(private productService: ProductServiceInterface){}

    async getAllProducts(): Promise<Product[]> {
        return await this.productService.getAllProducts()
    }
    async editProduct(id: number, product:Product): Promise<void> {
        await this.productService.editProduct(id, product)
    }
    async deleteProduct(id: number): Promise<void> {
        await this.productService.deleteProduct(id)
    }
    
}