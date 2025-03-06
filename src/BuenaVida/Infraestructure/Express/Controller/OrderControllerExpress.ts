import { Request, Response } from "express";
import OrderUseCasePort from "../../../Domain/Port/Driver/OrderUseCasePort";

export default class OrderControllerExpress {
  constructor(private orderUseCase: OrderUseCasePort) {}

  async getAllOrders(_req: Request, res: Response) {
    try {
      const orders = await this.orderUseCase.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener órdenes" });
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const orderId = Number(req.params.id);
      
      if (isNaN(orderId)) {
        return res.status(400).json({ error: "ID de orden inválido" });
      }
  
      const order = await this.orderUseCase.obtenerPorId(orderId);
      
      if (!order) {
        return res.status(404).json({ error: "Orden no encontrada" });
      }
  
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la orden" });
    }
  }
  
}