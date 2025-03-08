import { Response } from "express";
import { AuthPort } from "../../Domain/Port/Driven/AuthPort";
import pool from "./conection";
import jwt from "jsonwebtoken";

export default class AuthRepository implements AuthPort {
  readonly secret: string = "mi_secreto";

  async generateToken(userId: string): Promise<string> {
    return jwt.sign({ userId }, this.secret, { expiresIn: "1h" });
  }

  async validateToken(token: string): Promise<string | null> {
    try {
      const decoded = jwt.verify(token, this.secret) as { userId: string };
      return decoded.userId;
    } catch (error) {
      return null;
    }
  }

  async authenticateUser(
    email: string,
    password: string,
    res: Response
  ): Promise<boolean> {
    const user = await this.verifyCredentials(email, password);
    if (!user) return false;

    const token = this.generateToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return true;
  }

  async logoutUser(res: Response): Promise<void> {
    res.clearCookie("token");
    console.log("Usuario ha cerrado sesión.");
  }


  async verifyCredentials(
    email: string,
    password: string
  ): Promise<{ id: string } | null> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute(
        `SELECT id, password FROM users WHERE email = ?`,
        [email]
      );
      connection.release();
      if (!Array.isArray(rows) || rows.length === 0) {
        return null;
      }
      const user = rows[0] as { id: string; password: string };
      if (password !== user.password) {
        return null;
      }
      return { id: user.id };
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async registerUser(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    password: string
  ): Promise<{ id: string }> {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        `INSERT INTO users (cc, nombre, apellidos, email, contraseña) VALUES (?, ?, ?, ?, ?)`,
        [id, nombre, apellidos, email, password]
      );
      connection.release();
      return { id: (result as any).insertId };
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async updateUser(
    id: number,
    email?: string,
    password?: string
  ): Promise<boolean> {
    const connection = await pool.getConnection();
    try {
      const fields: string[] = [];
      const values: any[] = [];

      if (email) {
        fields.push("email = ?");
        values.push(email);
      }
      if (password) {
        fields.push("contraseña = ?");
        values.push(password);
      }

      if (fields.length === 0) {
        connection.release();
        return false;
      }
      values.push(id);
      const query = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
      const [result] = await connection.execute(query, values);
      connection.release();
      return (result as any).affectedRows > 0;
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        `DELETE FROM users WHERE id = ?`,
        [id]
      );

      connection.release();
      return (result as any).affectedRows > 0;
    } catch (error) {
      connection.release();
      throw error;
    }
  }

  async getUserByEmail(
    email: string
  ): Promise<{ id: number; password: string } | null> {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.execute(
        `SELECT id, contraseña FROM users WHERE email = ?`,
        [email]
      );
      connection.release();

      if (!Array.isArray(rows) || rows.length === 0) {
        return null;
      }

      const user = rows[0] as { id: number; password: string };
      return user;
    } catch (error) {
      connection.release();
      throw error;
    }
  }
}
