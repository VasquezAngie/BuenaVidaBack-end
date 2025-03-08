export default abstract class AbstractProduct {
  protected id: number;
  protected nombre: string;
  protected descripcion: string;
  protected precio: number;
  protected stock: number;
  protected categoria: string;
  protected image: string;
  protected enPromocion: number;
  protected descuento: number;

  constructor(productoInterface: ProductInterface) {
    this.id = productoInterface.id;
    this.nombre = productoInterface.nombre;
    this.descripcion = productoInterface.descripcion;
    this.precio = productoInterface.precio;
    this.stock = productoInterface.stock;
    this.categoria = productoInterface.categoria;
    this.image = productoInterface.image;
    this.enPromocion = productoInterface.enPromocion;
    this.descuento = productoInterface.descuento;
  }

  public abstract isNull(): boolean;

  public getId = (): number => this.id;
  public getnombre = (): string => this.nombre;
  public getdescripcion = (): string => this.descripcion;
  public getprecio = (): number => this.aplicarDescuento();
  public getstock = (): number => this.stock;
  public getcategoria = (): string => this.categoria;
  public getImage = (): string => this.image;
  public getDescuento = (): number => this.descuento
  public getenpromocion = (): number => this.enPromocion;
  protected aplicarDescuento(): number {
    if (this.descuento > 0) {
      this.precio = this.precio * (1 - this.descuento / 100);
    }

    return this.precio;
  }
}

export interface ProductInterface {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  image: string;
  descuento: number;
  enPromocion: number;
}
