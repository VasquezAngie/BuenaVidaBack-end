import { OrderInterface } from '../../Order/AbstractOrder';
import Order from '../../Order/Order';
import { ProductInterface } from '../../Product/AbstractProduct';

export default interface OrderUseCasePort {
    // listOrders(): Promise<Order[]>;
    // getOrderById(orderId: number): Promise<Order | null>;
    // createOrder(order: Order): Promise<void>;
    getAllOrders(): Promise<Order[]>;
    createOrder(order: Order): Promise<void>;
    guardar(order: Order): Promise<void>;
    actualizar(order: Order): Promise<void>;
    listarPorUsuario(userId: number): Promise<Order[]>;

    newOrder(): Promise<Order>;
    obtenerPorId(orderId: number): Promise<Order>;
    actualizarEstado(order: Order): Promise<void>;
    actualizarEstado(order: Order): Promise<void>;
    actualizarEstado(order: Order): Promise<void>;


  }