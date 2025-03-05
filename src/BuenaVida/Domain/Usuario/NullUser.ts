import AbstractUser from "./AbstractUser";

export default class NullUsuario extends AbstractUser {
  constructor() {
    super({
      id: 0,
      nombre: "None",
      email: "",
      contraseña: "",
      direction: "",
      telefono: "",
      pedidos: [],
      favoritos: [],
    });
  }

  public isNull = (): boolean => true;
}
