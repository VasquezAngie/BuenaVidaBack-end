import AbstractOrder from "./AbstractOrder";

export default class NullOrder extends AbstractOrder {
  constructor() {
    super({
      id: 0,
      usuarioId: 0,
      productos: [],
      total: 0,
      estado: "Sin pedido",
      direccionEntrega: "no aplica",
      telefono: 0,
    });
  }

  public isNull = (): boolean => true;
}
