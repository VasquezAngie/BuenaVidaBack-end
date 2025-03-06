import Order from '../../Order/Order'

export default interface OrderUseCasePort {
    // listOrders(): Promise<Order[]>;
    // getOrderById(orderId: number): Promise<Order | null>;
    // createOrder(order: Order): Promise<void>;
    getAllOrders(): Promise<Order[]>;
    obtenerPorId(orderId: number): Promise<Order>;
    createOrder(order: Order): Promise<void>;
    guardar(order: Order): Promise<void>;
    actualizar(order: Order): Promise<void>;
    listarPorUsuario(userId: number): Promise<Order[]>;
  }