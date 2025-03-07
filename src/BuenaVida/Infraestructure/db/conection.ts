import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "250715",
  database: process.env.DB_NAME || "buenavidabd",
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

/*const conection = async () => {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "250715",
      database: process.env.DB_NAME || "buenavidabd",
      port: Number(process.env.DB_PORT) || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    console.log("Probando conexión a la base de datos");
    const connection = await pool.getConnection();
    console.log("Conexion exitosa");

    const [rows] = await connection.query("SHOW TABLES;");
    console.log("Tablas:", rows);

    connection.release();
    pool.end();
  } catch (error) {
    console.error("Error en la conexion a MySQL:", error);
  }
};

conection();*/
