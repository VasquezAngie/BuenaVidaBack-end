import Product from "../../Product/Product";

export default interface ProductReporsitoryPort {
    createProduct(data: Product): Promise<void>
    editProduct(id: number, product: Product): Promise<Product>
    deleteProduct(id: number): Promise<void>
    getProductById(id: number): Promise<Product>
    getAllProduct(): Promise<Product[]>
    
}