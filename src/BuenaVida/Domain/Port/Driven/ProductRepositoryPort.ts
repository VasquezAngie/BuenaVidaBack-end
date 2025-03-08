import Product from "../../Product/Product";

export default interface ProductReporsitoryPort {
    createProduct(data: Product): Promise<boolean>
    editProduct(id: number, product: Product): Promise<boolean>
    deleteProduct(id: number): Promise<boolean>
    getProductById(id: number): Promise<Product>
    getAllProduct(): Promise<Product[]>
    
}