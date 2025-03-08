import { OrderInterface } from "../../Domain/Order/AbstractOrder";
import Order from "../../Domain/Order/Order";
import OrderRepositoryPort from "../../Domain/Port/Driven/OrderRepositoryPort";
import pool from "./conection";


export default class OrderRepository implements OrderRepositoryPort {
    
    async getTotal(id: number): Promise<number> {
        const connection = await pool.getConnection();
        try {
            const [rows]: any = await connection.execute(
                `SELECT total FROM pedidos WHERE idPedido = ?`,
                [id]
            );
            connection.release();
    
            if (rows.length === 0) {
                throw new Error("Pedido no encontrado");
            }
    
            return rows[0].total;
        } catch (error) {
            connection.release();
            throw error;
        }  
    }

    async getState(id: number): Promise<string> {
        const connection = await pool.getConnection();
        try {
            const [rows]: any = await connection.execute(
                `SELECT nombreEstado FROM estadospedidos WHERE idEstado = ?`,
                [id]
            );
            connection.release();
            return rows.length > 0 ? rows[0].nombreEstado : "Estado no encontrado";
        } catch (error) {
            connection.release();
            throw error;
        }    
    }

    async updateOrderState(id: number, estado: string): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.execute(
                `UPDATE pedidos SET idEstado = ? WHERE idPedido = ?`,
                [estado, id]
            );
            connection.release();
        } catch (error) {
            connection.release();
            throw error;
        }    
    }
    
    async updateOrderAddress(userId: number, address: string): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.execute(
                `UPDATE pedidos SET direccion = ? WHERE idPedido = ?`,
                [address, userId]
            );
            connection.release();
        } catch (error) {
            connection.release();
            throw error;
        }  
    }

    async updateOrderCelphone(userId: number, celphone: number): Promise<void> {
        const connection = await pool.getConnection();
        try {
            await connection.execute(
                `UPDATE pedidos SET direccion = ? WHERE idPedido = ?`,
                [celphone, userId]
            );
            connection.release();
        } catch (error) {
            connection.release();
            throw error;
        }  
    }

    async getOrderForUser(id: number): Promise<Order[] | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(`SELECT * FROM pedidos WHERE idPedido = ?`, [id]);
            connection.release();
            const objetos = (rows as OrderInterface[]) || null;

            const noloentiendo = objetos.map(objeto => { 
                return new Order(objeto)
            })

            return noloentiendo;
        } catch (error) {
            connection.release();
            throw error;
        }
    }
    
    async createOrder(order: Order): Promise<void> {
        const connection = await pool.getConnection();
        try {
            const [result]: any = await connection.execute(
                `INSERT INTO pedidos (idUsuario, idEstado, total) VALUES (?, ?, ?)`,
                [order.setUsuarioId, order.setEstado, order.setTotal]
            );
            connection.release();
            return result.insertId;
        } catch (error) {
            connection.release();
            throw error;
        }
    }

    async getOrderById(id: number): Promise<Order | null> {
        const connection = await pool.getConnection();
        try {
            const [rows]: any = await connection.execute(
                `SELECT * FROM pedidos WHERE idPedido = ?`,
                [id]
            );
            connection.release();
            return rows.length > 0 ? new Order(rows[0]) : null;
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