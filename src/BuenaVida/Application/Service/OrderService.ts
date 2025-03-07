import { OrderServiceInterface } from "../../Domain/interfaces/Order/OrderServiceInterface";
import Order from "../../Domain/Order/Order";
import OrderRepositoryPort from "../../Domain/Port/Driven/OrderRepositoryPort";

export default class OrderService implements OrderServiceInterface {

  constructor(private orderRepository: OrderRepositoryPort) {}

  async calcularTotal(idPedido: number): Promise<number> {
    return await this.orderRepository.getTotal(idPedido)
  }

  async createOrder(order: Order): Promise<void> {
    await this.orderRepository.createOrder(order)
  }

  async getOrderById(id: number): Promise<Order | null> {
    return await this.orderRepository.getOrderById(id);
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.orderRepository.getAllOrders();
  }

  async getState(id: number): Promise<string> {
    return await this.orderRepository.getState(id);
  }

  async updateOrderState(pedidoId: number, newState: string): Promise<void> {
    const order = await this.getOrderById(pedidoId);
    const state = newState

    if (!order) {
      throw new Error("Pedido no encontrado");
    }

    await this.orderRepository.updateOrderState(pedidoId, state);
    
  }

  async updateOrderAddress(pedidoId: number, address: string): Promise<void> {
    const order = await this.getOrderById(pedidoId);

    if (!order) {
      throw new Error("Pedido no encontrado");
    }

    await this.orderRepository.updateOrderAddress(pedidoId, address);
  }

  async updateOrderCelphone(pedidoId: number, newPhone: number): Promise<void> {
    const order = await this.getOrderById(pedidoId);
    const phone = newPhone

    if (!order) {
      throw new Error("Pedido no encontrado");
    }

    await this.orderRepository.updateOrderCelphone(pedidoId, phone);
  
  }

  async deleteOrder(pedidoId: number): Promise<void> {
    return await this.orderRepository.deleteOrder(pedidoId);
  }

  async getOrderForUser(userId: number): Promise<Order[] | null> {
    return await this.orderRepository.getOrderForUser(userId);
  }

}
