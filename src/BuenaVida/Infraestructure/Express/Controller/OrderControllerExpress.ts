import { Request, Response } from "express";
import OrderUseCasePort from "../../../Domain/Port/Driver/OrderUseCasePort";

export default class OrderControllerExpress {
  constructor(private orderUseCase: OrderUseCasePort) {}

  async createOrder(req: Request, res: Response) {
    try {
      const order = req.body;
      const orders = await this.orderUseCase.crearOrden(order);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener órdenes" });
    }
  }

  async getEstado(req: Request, res: Response) {
    try {
      const orderId = Number(req.params.id);
      
      if (isNaN(orderId)) {
        
        res.status(400).json({ error: "ID de orden inválido" });
        return 
      }
  
      const order = await this.orderUseCase.getEstadoOrden(orderId);
      
      if (!order) {
        res.status(404).json({ error: "Orden no encontrada" });
        return
      }
  
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la orden" });
    }
  }
  
}