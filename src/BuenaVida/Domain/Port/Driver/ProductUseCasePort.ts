import Product from "../../Product/Product"

export default interface ProductUseCasePort {

    getAllProducts(): Promise<Product[]>
    editProduct(id: number, product: Product): Promise<boolean>
    deleteProduct(id: number): Promise<boolean>

}