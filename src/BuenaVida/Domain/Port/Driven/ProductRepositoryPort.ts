import Product from "../../Product/Product";

export default interface ProductReporsitoryPort {
    createProduct: (data: Product) => Promise<Product>;
    
}