import AbstractOrder, {
  OrderInterface,
} from "../../Domain/Order/AbstractOrder";
import Order from "../../Domain/Order/Order";
import OrderRepositoryPort from "../../Domain/Port/Driven/OrderRepositoryPort";
//import NullOrder from "../../Domain/Order/NullOrder";
import { ProductInterface } from "../../Domain/Product/AbstractProduct";

export default class OrderService {
  private orderRepository: OrderRepositoryPort;

  constructor(orderRepository: OrderRepositoryPort) {
    this.orderRepository = orderRepository;
  }

  public async crearPedido(orderData: OrderInterface): Promise<OrderInterface> {
    //CORREGIR
    /*if (!orderData.productos || orderData.productos.length === 0) {
      return new NullOrder(); // Retorna una orden nula si no hay productos
    }*/
    const order = new Order(orderData);
    const productos: ProductInterface[] = order.getProductos();
    const total = this.calcularTotal(productos);
    order.setTotal(total);
    const nuevoPedido = await this.orderRepository.createOrder(order);
    return nuevoPedido;
  }

  // public async actualizarEstadoPedido(pedidoId: number, nuevoEstado: string): Promise<OrderInterface> {
  //   const pedido = await this.orderRepository.getOrderById(pedidoId);

  //   if (!pedido) {
  //     throw new Error("Pedido no encontrado");
  //   }
  //   pedido.estado = nuevoEstado;
  //   const pedidoActualizado = await this.orderRepository.updateOrder(pedido, nuevoEstado);
  //   return pedidoActualizado;
  // }

  public async obtenerPedido(pedidoId: number): Promise<OrderInterface> {
    const pedido = await this.orderRepository.getOrderById(pedidoId);

    if (!pedido) {
      throw new Error("Pedido no encontrado");
    }
  
    return pedido;
  }

  public async listarPedidosUsuario(
    usuarioId: number
  ): Promise<OrderInterface[]> {
    const pedidos = await this.orderRepository.getOrderForUser(usuarioId);
    return pedidos | null;
  }

  public calcularTotal(productos: ProductInterface[]): number {
    return productos.reduce(
      (total: number, producto: ProductInterface) => total + producto.precio,
      0
    );
  }
}
