import ProductReporsitoryPort from "../../Domain/Port/Driven/ProductRepositoryPort";
import Product from "../../Domain/Product/Product";
import pool from "./conection";

export default class ProductRepository implements ProductReporsitoryPort{
  
    async getAllProduct(): Promise<Product[]> {
        const connection = await pool.getConnection();
        try {
          const query = "SELECT * FROM productos"
          const [rows]: any = await connection.execute(query);
          connection.release();
          if (rows.length === 0) {
            throw new Error("Producto no encontrado");
          }
          return rows[0] as Product[];
        } catch (error) {
          connection.release();
          throw error;
        }  
    }

  async editProduct(id: number, data: Product): Promise<boolean> {
    const connection = await pool.getConnection();
    try {
      const query = `UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ?, image = ?, descuento = ?, enPromocion = ? WHERE id = ?`;
      const values = [
        data.getnombre,
        data.getdescripcion,
        data.getprecio,
        data.getstock,
        data.getcategoria,
        data.getImage,
        data.getDescuento,
        data.getenpromocion,
        id,
      ];
      await connection.execute(query, values);
      connection.release();
      return true;
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<boolean> {
    const connection = await pool.getConnection();
    try {
      const query = "DELETE FROM productos WHERE id = ?";
      await connection.execute(query, [id]);
      connection.release();
      return true;

    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async createProduct(data: Product): Promise<boolean> {
    const connection = await pool.getConnection();
    try {
      const query = "INSERT INTO productos (nombre, descripcion, precio, stock, categoria, image, descuento, enPromocion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        data.getnombre,
        data.getdescripcion,
        data.getprecio,
        data.getstock,
        data.getcategoria,
        data.getImage,
        data.getDescuento,
        data.getenpromocion,
      ];
      await connection.execute(query, values);
      connection.release();
      return true;

    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product> {
    const connection = await pool.getConnection();
    try {
      const query = "SELECT * FROM productos WHERE id = ?";
      const [rows]: any = await connection.execute(query, [id]);
      connection.release();
      if (rows.length === 0) {
        throw new Error("Producto no encontrado");
      }
      return rows[0] as Product;
    } catch (error) {
      connection.release();
      throw error;
    }
  }

}
