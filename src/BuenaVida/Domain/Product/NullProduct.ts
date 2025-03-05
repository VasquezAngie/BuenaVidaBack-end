import AbstractProduct from "./AbstractProduct";

export default class NullProducto extends AbstractProduct {
  constructor() {
    super({
      id: 0,
      nombre: "Producto no disponible",
      descripcion: "",
      precio: 0,
      categoria: "",
      descuento: 0,
      image: "",
    });
  }

  public isNull = (): boolean => true;
}
