import Order from "../../Order/Order";

export default interface OrderRepositoryPort {

    createOrder(order: Order): Promise<void> 

    getTotal(id: number): Promise<number> 

    getOrderById(id: number): Promise<Order | null>

    getAllOrders(): Promise<Order[]>

    getState(id: number): Promise<string>

    updateOrderState(id: number, estado: string): Promise<void>

    updateOrderAddress(id: number, address: string): Promise<void>

    updateOrderCelphone(id: number, phone: number): Promise<void>

    deleteOrder(id: number): Promise<void>

    getOrderForUser(id: number): Promise<Order[] | null>
}