import OrderRepository from "../repositories/OrderRepository";
import AbstractOrder, {
  OrderInterface,
} from "../../Domain/Order/AbstractOrder";
import Order from "../../Domain/Order/Order";
//import NullOrder from "../../Domain/Order/NullOrder";
import { ProductInterface } from "../../Domain/Product/AbstractProduct";

export default class OrderService {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
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
    const nuevoPedido = await this.orderRepository.guardar(order);
    return nuevoPedido;
  }

  public async actualizarEstadoPedido(
    pedidoId: number,
    nuevoEstado: string
  ): Promise<OrderInterface> {
    const pedido = await this.orderRepository.obtenerPorId(pedidoId);

    if (!pedido) {
      throw new Error("Pedido no encontrado");
    }
    pedido.estado = nuevoEstado;
    const pedidoActualizado = await this.orderRepository.actualizar(pedido);
    return pedidoActualizado;
  }

  public async obtenerPedido(pedidoId: number): Promise<OrderInterface> {
    const pedido = await this.orderRepository.obtenerPorId(pedidoId);
    //CORREGIR
    /*if (!pedido) {
      return new NullOrder();
    }*/
    return pedido;
  }

  public async listarPedidosUsuario(
    usuarioId: number
  ): Promise<OrderInterface[]> {
    const pedidos = await this.orderRepository.listarPorUsuario(usuarioId);
    return pedidos;
  }

  public calcularTotal(productos: ProductInterface[]): number {
    return productos.reduce(
      (total: number, producto: ProductInterface) => total + producto.precio,
      0
    );
  }
}
