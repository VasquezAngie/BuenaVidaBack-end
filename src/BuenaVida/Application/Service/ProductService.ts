import ProductReporsitoryPort from "../../Domain/Port/Driven/ProductRepositoryPort";

export default class ProductService {
    private productRepositoryP: ProductReporsitoryPort;

    constructor(productRepository: ProductReporsitoryPort) {
        this.productRepositoryP = productRepository;
    }
}