import OrderDetailInterface from "../OrderDetail/AbstractOrderDetail";

export default abstract class AbstractOrder {
  protected id: number;
  protected usuarioId: number;
  protected detallePedido: OrderDetailInterface[];
  protected fecha: Date;
  protected total: number;
  protected estado: string;
  protected direccionEntrega: string;
  protected telefono: number;

  constructor(orderInterface: OrderInterface) {
    this.id = orderInterface.id;
    this.usuarioId = orderInterface.usuarioId;
    this.detallePedido = orderInterface.detallePedido;
    this.fecha = orderInterface.fecha;
    this.total = orderInterface.total;
    this.estado = orderInterface.estado;
    this.direccionEntrega = orderInterface.direccionEntrega;
    this.telefono = orderInterface.telefono;
  }

  //Getters y setters
  public abstract isNull(): boolean;

  public getId(): number {
    return this.id;
  }
  public getUsuarioId(): number {
    return this.usuarioId;
  }
  public getDetallePedido(): OrderDetailInterface[] {
    return this.detallePedido;
  }

  public getFecha(): Date {
    return this.fecha;
  }

  public getTotal(): number {
    return this.total;
  }
  public getEstado(): string {
    return this.estado;
  }
  public getDireccionEntrega(): string {
    return this.direccionEntrega;
  }
  public getTelefono(): number {
    return this.telefono;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public setUsuarioId(usuarioId: number): void {
    this.usuarioId = usuarioId;
  }
  public setDetallePedido(detallePedido: OrderDetailInterface[]): void {
    this.detallePedido = detallePedido;
  }

  public setTotal(total: number): void {
    this.total = total;
  }
  public setEstado(estado: string): void {
    this.estado = estado;
  }
  public setDireccionEntrega(direccionEntrega: string): void {
    this.direccionEntrega = direccionEntrega;
  }
  public setTelefono(telefono: number): void {
    this.telefono = telefono;
  }
}

export interface OrderInterface {
  id: number;
  usuarioId: number;
  detallePedido: OrderDetailInterface[];
  fecha: Date;
  total: number;
  estado: string;
  direccionEntrega: string;
  telefono: number;
  getId(): number;
}
