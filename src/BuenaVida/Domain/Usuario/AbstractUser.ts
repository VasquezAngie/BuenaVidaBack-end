export default abstract class AbstractUser {
  protected id: number;
  protected nombre: string;
  protected email: string;
  protected contraseña: string;
  protected rol: string;

  constructor(usuarioInterface: UsuarioInterface) {
    this.id = usuarioInterface.id;
    this.nombre = usuarioInterface.nombre;
    this.email = usuarioInterface.email;
    this.contraseña = usuarioInterface.contraseña;
    this.rol = usuarioInterface.rol;
  }

  public abstract isNull(): boolean;

  public getId = (): number => this.id;

  public getnombre = (): string => this.nombre;

  public getEmail = (): string => this.email;

  public getcontraseña = (): string => this.contraseña;

  public setNombre = (nombre: string): void => {
    this.nombre = nombre;
  };

  public setEmail = (email: string): void => {
    this.email = email;
  };

  public setContraseña = (contraseña: string): void => {
    this.contraseña = contraseña;
  };
}

interface UsuarioInterface {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
  rol: string;
}

export { UsuarioInterface };
