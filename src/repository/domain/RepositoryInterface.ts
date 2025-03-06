export default interface RepositoryInterface<_E, T> {
    // findAll: () => Promise<T[]>
    // findById: (id: E) => Promise<T>
    // save: (item: T) => Promise<T>
    // update: (id: E, item: T) => Promise<T | boolean>
    // patch: (id: E, item: Partial<T>) => Promise<T | boolean>
    // delete: (id: E) => Promise<boolean>

    createOrder(order: T): Promise<number> 

    getOrderById(id: number): Promise<T | null>

    getAllOrders(): Promise<T[]>

    updateOrder(id: number, order: T): Promise<void>

    deleteOrder(id: number): Promise<void>

    getOrderForUser(id: number): Promise<T[] | null>
  }