import Product from '../../Product/Product';

export interface ProductServiceInterface {
    getAllProducts(): Promise<Product[]>
    getProductId(idProduct: number): Promise<Product>

    enPromocion(idProduct: number): Promise<boolean>
    getDescuento(idProduct: number): Promise<number>
    editProduct(idProduct: number, product:Product): Promise<void>
    addProduct(product: Product): Promise<void>
    deleteProduct(id: number): Promise<void>

}