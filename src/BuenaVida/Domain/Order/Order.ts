import AbstractOrder, { OrderInterface } from "./AbstractOrder";

export default class Order extends AbstractOrder {
  constructor(pedidoInterface: OrderInterface) {
    super(pedidoInterface);
  }

  public isNull = (): boolean => false;
}
