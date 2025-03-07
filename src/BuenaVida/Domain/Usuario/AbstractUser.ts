export default abstract class AbstractUser {
  protected id: number;
  protected nombre: string;
  protected apellidos: string;
  protected email: string;
  protected contraseña: string;
  protected rol: string;

  constructor(usuarioInterface: UsuarioInterface) {
    this.id = usuarioInterface.id;
    this.nombre = usuarioInterface.nombre;
    this.apellidos = usuarioInterface.apellidos;
    this.email = usuarioInterface.email;
    this.contraseña = usuarioInterface.contraseña;
    this.rol = usuarioInterface.rol;
  }

  public abstract isNull(): boolean;

  public getId = (): number => this.id;

  public getnombre = (): string => this.nombre;

  public getApellidos = (): string => this.apellidos;

  public getEmail = (): string => this.email;

  public getcontraseña = (): string => this.contraseña;

  public setNombre = (nombre: string): void => {
    this.nombre = nombre;
  };

  public setApellidos = (apellidos: string): void => {
    this.apellidos = apellidos;
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
  apellidos: string;
  email: string;
  contraseña: string;
  rol: string;
}

export { UsuarioInterface };
