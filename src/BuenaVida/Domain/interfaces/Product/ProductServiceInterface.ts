import Product from '../../Product/Product';

export interface ProductServiceInterface {
    getAllProducts(): Promise<Product[]>
    getProductId(idProduct: number): Promise<Product>

    enPromocion(idProduct: number): Promise<boolean>
    getDescuento(idProduct: number): Promise<number>
    editProduct(idProduct: number, product:Product): Promise<boolean>
    addProduct(product: Product): Promise<boolean>
    deleteProduct(id: number): Promise<boolean>

}