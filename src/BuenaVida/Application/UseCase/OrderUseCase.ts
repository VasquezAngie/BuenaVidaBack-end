import { OrderServiceInterface } from "../../Domain/interfaces/Order/OrderServiceInterface";
import { OrderInterface } from "../../Domain/Order/AbstractOrder";
import Order from "../../Domain/Order/Order";
import OrderUseCasePort from "../../Domain/Port/Driver/OrderUseCasePort";


export default class OrderUseCases implements OrderUseCasePort {

  constructor(private readonly orderService: OrderServiceInterface) {}

  async crearOrden(order: OrderInterface): Promise<void> {
    const orderCreated = new Order(order)
    await this.orderService.createOrder(orderCreated);
  }

  async calcularTotal(idPedido: number): Promise<number> {
    return await this.orderService.calcularTotal(idPedido);
  }

  async getEstadoOrden(idPedido: number): Promise<string> {
    return await this.orderService.getState(idPedido);
  }

  async actualizarEstadoOrden(idPedido:number, nuevoEstado: string): Promise<void> {
    const estadosPermitidos = ["pendiente", "procesando", "completado", "cancelado"];
    if (!estadosPermitidos.includes(nuevoEstado)) {
      throw new Error("Estado de orden no válido");
    }
    await this.orderService.updateOrderState(idPedido, nuevoEstado);  
  }


  /////////////////

  async traerPedido(id: number): Promise<Order | null> {
    return await this.orderService.getOrderById(id);
  }

  async todosPedidos(): Promise<Order[]> {
    return await this.orderService.getAllOrders();
  }

  async actualizarDireccion(id: number, newAddress: string): Promise<void> {
    await this.orderService.updateOrderAddress(id, newAddress);
  }

  async actualizarCelular(id: number, newPhone: number): Promise<void> {
    await this.orderService.updateOrderCelphone(id, newPhone);
  }

  async eliminarPedido(pedidoId: number): Promise<void> {
    await this.orderService.deleteOrder(pedidoId);
  }

  async pedidoUser(userId: number): Promise<Order[] | null> {
    return await this.orderService.getOrderForUser(userId);
  }
  
  
}
