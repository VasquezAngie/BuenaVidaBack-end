import AbstractCart from "../Cart/AbstractCart";

export default class NullCart extends AbstractCart {
  constructor() {
    super({
      usuarioId: 0,
      productos: [],
      total: 0,
    });
  }

  public isNull = (): boolean => true;
}
