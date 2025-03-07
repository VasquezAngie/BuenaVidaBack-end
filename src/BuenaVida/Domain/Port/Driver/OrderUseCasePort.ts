import { OrderInterface } from '../../Order/AbstractOrder';
import Order from '../../Order/Order';
import { ProductInterface } from '../../Product/AbstractProduct';

export default interface OrderUseCasePort {
    
  crearOrden(order: OrderInterface): Promise<void>
  calcularTotal(idPedido: number): Promise<number>
  getEstadoOrden(idPedido: number): Promise<string>
  actualizarEstadoOrden(idPedido:number, nuevoEstado: string): Promise<void>

  
  traerPedido(id: number): Promise<Order | null>
  todosPedidos(): Promise<Order[]>
  actualizarDireccion(id: number, newAddress: string): Promise<void>
  actualizarCelular(id: number, newPhone: number): Promise<void>
  eliminarPedido(pedidoId: number): Promise<void> 
  pedidoUser(userId: number): Promise<Order[] | null> 

}