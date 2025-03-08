import { Request, Response } from "express";
import ProductControllerExpressInterface from "../../../Domain/interfaces/Product/ProductControllerExpressInterface";
import Product from "../../../Domain/Product/Product";
import ProductUseCasePort from "../../../Domain/Port/Driver/ProductUseCasePort";

export default class ProductControllerExpress implements ProductControllerExpressInterface {

  constructor(private productUseCase: ProductUseCasePort) {  }

  async getAllProducts(_req: Request, res: Response): Promise<void> {
    try {
      const products: Product[] = await this.productUseCase.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  async editProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id)
      if (isNaN(id)) {
        res.status(400).json({ message: "ID de producto inválido" });
        return;
      }

      const productData = req.body;
      const updatedProduct = await this.productUseCase.editProduct(id, productData);

      if (!updatedProduct) {
        res.status(404).json({ message: "Producto no encontrado" });
        return;
      }

      res.status(200).json({ message: "Producto actualizado", product: updatedProduct });
    } catch (error) {
      console.error("Error al editar producto:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
        res.status(400).json({ message: "ID de producto inválido" });
        return;
        }
        
      const deleted = await this.productUseCase.deleteProduct(id);

      if (!deleted) {
        res.status(404).json({ message: "Producto no encontrado" });
        return;
      }

      res.status(200).json({ message: "Producto eliminado" });
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
}