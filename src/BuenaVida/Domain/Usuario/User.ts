import AbstractUser, { UsuarioInterface } from "./AbstractUser";

export default class User extends AbstractUser {
  constructor(usuarioInterface: UsuarioInterface) {
    super(usuarioInterface);
  }

  public isNull = (): boolean => false;
}
