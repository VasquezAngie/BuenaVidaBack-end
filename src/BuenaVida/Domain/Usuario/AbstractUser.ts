import AbstractPedido from "../Order/AbstractOrder";
import { ProductInterface } from "../Product/AbstractProduct";

export default abstract class AbstractUser {
  protected id: number;
  protected nombre: string;
  protected email: string;
  protected contraseña: string;
  protected direction: string;
  protected telefono: string;
  protected pedidos: AbstractPedido[];
  protected favoritos: ProductInterface[];

  constructor(usuarioInterface: UsuarioInterface) {
    this.id = usuarioInterface.id;
    this.nombre = usuarioInterface.nombre;
    this.email = usuarioInterface.email;
    this.contraseña = usuarioInterface.contraseña;
    this.direction = usuarioInterface.direction;
    this.telefono = usuarioInterface.telefono;
    this.pedidos = usuarioInterface.pedidos;
    this.favoritos = usuarioInterface.favoritos;
  }

  public abstract isNull(): boolean;

  public getId = (): number => this.id;

  public getnombre = (): string => this.nombre;

  public getEmail = (): string => this.email;

  public getcontraseña = (): string => this.contraseña;

  public getDirection = (): string => this.direction;

  public gettelefono = (): string => this.telefono;

  public getPedidos = (): AbstractPedido[] => this.pedidos;

  public añadirAFavoritos(producto: ProductInterface) {
    this.favoritos.push(producto);
  }
  public eliminarDeFavoritos(producto: ProductInterface) {
    this.favoritos = this.favoritos.filter((item) => item.id !== producto.id);
  }
}

interface UsuarioInterface {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
  direction: string;
  telefono: string;
  pedidos: AbstractPedido[];
  favoritos: ProductInterface[];
}

export { UsuarioInterface };
