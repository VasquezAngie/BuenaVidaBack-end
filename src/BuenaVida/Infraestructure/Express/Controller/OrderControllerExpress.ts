import { Request, Response } from "express";
import OrderUseCasePort from "../../../Domain/Port/Driver/OrderUseCasePort";
import OrderControllerExpressInterface from "../../../Domain/interfaces/Order/OrderControllerExpressInterface";

export default class OrderControllerExpress implements OrderControllerExpressInterface {
  constructor(private orderUseCase: OrderUseCasePort) {}

  async getPedidos(_req: Request, res: Response): Promise<void> {
    try {
      const pedidos = await this.orderUseCase.todosPedidos();
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los pedidos" });
    }
  }
  
  async getPedidoById(req: Request, res: Response): Promise<void> {
    try {
      const orderId = Number(req.params.id);
      if (isNaN(orderId)) {
        res.status(400).json({ error: "ID de orden inválido" });
        return;
      }
  
      const pedido = await this.orderUseCase.pedidoUser(orderId);
      if (!pedido) {
        res.status(404).json({ error: "Orden no encontrada" });
        return;
      }
  
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el pedido" });
    }
  }
  
  async getPedidoByUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = Number(req.params.userId);
      if (isNaN(userId)) {
        res.status(400).json({ error: "ID de usuario inválido" });
        return;
      }
  
      const pedidos = await this.orderUseCase.pedidoUser(userId);
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los pedidos del usuario" });
    }
  }  
  

  async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const order = req.body;
      const nuevaOrden = await this.orderUseCase.crearOrden(order);
      res.status(201).json(nuevaOrden);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la orden" });
    }
  }

  async getEstado(req: Request, res: Response): Promise<void> {
    try {
      const orderId = Number(req.params.id);
      
      if (isNaN(orderId)) {
        res.status(400).json({ error: "ID de orden inválido" });
        return
      }

      const estado = await this.orderUseCase.getEstadoOrden(orderId);
      
      if (estado === null || estado === undefined) {
        res.status(404).json({ error: "Orden no encontrada" });
        return
      }

      res.json({ estado });
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el estado de la orden" });
      return 
    }
  }

  
}