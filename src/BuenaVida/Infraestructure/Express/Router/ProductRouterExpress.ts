import { Router } from "express";
import ProductControllerExpressInterface from "../../../Domain/interfaces/Product/ProductControllerExpressInterface";
import ProductRouterExpressInterface from "../../../Domain/interfaces/Product/ProductRouterExpressInterface";

export default class ProductRouterExpress implements ProductRouterExpressInterface {
    
    router: Router;
    path: string;

    constructor(private readonly productController: ProductControllerExpressInterface) {
        this.router = Router()
        this.path = '/Product'
        this.routes()
    }

    public routes(): void {
        this.initializeRoutes()
    }
    
    public initializeRoutes(): void {
        console.log("rutas de productos");

        this.router.get("/allProducts", (req, res) => {
            console.log("Ruta /allProducts llamada");
            this.productController.getAllProducts(req, res);
        });

        this.router.post("/pedido/edit/:id", (req, res) => {
            console.log(`Ruta /pedido/edit/idxd llamada`);
            this.productController.editProduct(req, res);
        });

        this.router.put("/pedido/delete/:id", (req, res) => {
            console.log(`Ruta /pedido/delete/idxd llamada`);
            this.productController.deleteProduct(req, res);
        });

        console.log("Rutas de productos");
    }
  
}