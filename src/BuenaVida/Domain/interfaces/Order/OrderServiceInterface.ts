import Order from "../../Order/Order"

export interface OrderServiceInterface {

    calcularTotal(id:number): Promise<number>
      createOrder(order: Order): Promise<void>
      getOrderById(id: number): Promise<Order | null>
      getAllOrders(): Promise<Order[]>
      getState(id: number): Promise<string>
      updateOrderState(pedidoId: number, newState: string): Promise<void>
      updateOrderAddress(id: number, newAddress: string): Promise<void>
      updateOrderCelphone(id: number, newPhone: number): Promise<void>
      deleteOrder(pedidoId: number): Promise<void>
      getOrderForUser(userId: number): Promise<Order[] | null>
}