import Product from "../../Product/Product"

export default interface ProductControllerExpressInterface {

    getAllProducts(): Promise<Product[]>
    editProduct(id: number, product: Product): Promise<void>
    deleteProduct(id: number): Promise<void>
    

}