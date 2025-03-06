import Order from "../../Domain/Order/Order";
import OrderRepositoryPort from "../../Domain/Port/Driven/OrderRepositoryPort";
import pool from "./conection";


export default class OrderRepository implements OrderRepositoryPort {

    async getOrderForUser(id: number): Promise<Order[] | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(`SELECT * FROM pedidos WHERE idPedido = ?`, [id]);
            connection.release();
            return (rows as Order[]) || null;
        } catch (error) {
            connection.release();
            throw error;
        }
    }
    
    async createOrder(order: Order): Promise<number> {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute(
                `INSERT INTO pedidos (idPedido, idUsuario, idEstado) VALUES (?, ?, ?)`,
                [order.setId, order.setUsuarioId, order.setEstado]
            );
            connection.release();
            return (result as any).insertId;
        } catch (error) {
            connection.release();
            throw error;
        }
    }

    async getOrderById(id: number): Promise<Order | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(`SELECT * FROM pedidos WHERE idPedido = ?`, [id]);
            connection.release();
            return (rows as Order[])[0] || null;
        } catch (error) {
            connection.release();
            throw error;
        }
    }

    async getAllOrders(): Promise<Order[]> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(`SELECT * FROM pedidos`);
            connection.release();
            return rows as Order[];
        } catch (error) {
            connection.release();
            throw error;
        }
    }

    async updateOrder(id: number, order: Order): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.execute(
                `UPDATE pedidos SET idUsuario = ?, idEstado = ? WHERE idPedido = ?`,
                [order.setUsuarioId, order.setEstado, id]
            );
            connection.release();
        } catch (error) {
            connection.release();
            throw error;
        }
    }

    async deleteOrder(id: number): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.execute(`DELETE FROM pedidos WHERE idPedido = ?`, [id]);
            connection.release();
        } catch (error) {
            connection.release();
            throw error;
        }
    }
}