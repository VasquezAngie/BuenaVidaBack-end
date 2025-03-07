import ProductReporsitoryPort from "../../Domain/Port/Driven/ProductRepositoryPort";
import Product from "../../Domain/Product/Product";
import pool from "./conection";

export default class ProductRepository implements ProductReporsitoryPort{
  
    async getAllProduct(): Promise<Product[]> {
        const connection = await pool.getConnection();
        try {
          const query = "SELECT * FROM products";
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

  async editProduct(id: number, data: Product): Promise<Product> {
    const connection = await pool.getConnection();
    try {
      const query = `UPDATE products SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ?, image = ?, descuento = ?, enPromocion = ? WHERE id = ?`;
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
      return this.getProductById(id);
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const query = "DELETE FROM products WHERE id = ?";
      await connection.execute(query, [id]);
      connection.release();
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async createProduct(data: Product): Promise<void> {
    const connection = await pool.getConnection();
    try {
      const query = "INSERT INTO products (nombre, descripcion, precio, stock, categoria, image, descuento, enPromocion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
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
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product> {
    const connection = await pool.getConnection();
    try {
      const query = "SELECT * FROM products WHERE id = ?";
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
