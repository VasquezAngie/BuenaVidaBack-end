import { Request, Response } from "express";
import UserControllerExpressInterface from "../../../Domain/interfaces/User/UserControllerExpressInterface";
import UserUseCasePort from "../../../Domain/Port/Driver/UserUseCasePort";

export default class UserControllerExpress
  implements UserControllerExpressInterface
{

  constructor(private userUseCase: UserUseCasePort) {
  }

  async iniciarSesion(req: Request, res: Response): Promise<void> {
    try {
      const { email, contraseña } = req.body;
      const usuario = await this.userUseCase.iniciarSesion(email, contraseña);

      if (usuario) {
        res.status(200).json({ mensaje: "Inicio de sesión exitoso", usuario });
      } else {
        res.status(401).json({ error: "Credenciales incorrectas" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async registrarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const { id, nombre, apellidos, email, contraseña } = req.body;

      const resultado = await this.userUseCase.crearUsuario(
        id,
        nombre,
        apellidos,
        email,
        contraseña
      );

      if (resultado) {
        res.status(201).json({ mensaje: "Usuario registrado con éxito" });
      } else {
        res.status(400).json({ error: "No se pudo registrar el usuario" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async actualizarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const idParam = req.params.id;
      if (!idParam) {
        res.status(400).json({ error: "ID de usuario no proporcionado" });
        return;
      }

      const id = parseInt(idParam, 10);
      if (isNaN(id) || id <= 0) {
        res.status(400).json({ error: "ID de usuario inválido" });
        return;
      }

      const { email, contraseña } = req.body;
      const actualizado = await this.userUseCase.actualizarUsuario(
        id,
        email,
        contraseña
      );

      if (actualizado) {
        res.status(200).json({ mensaje: "Usuario actualizado correctamente" });
      } else {
        res.status(400).json({ error: "No se pudo actualizar el usuario" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async eliminarUsuario(req: Request, res: Response): Promise<void> {
    try {
      const idParam = req.params.id;
      if (!idParam) {
        res.status(400).json({ error: "ID de usuario no proporcionado" });
        return;
      }

      const id = parseInt(idParam, 10);
      if (isNaN(id) || id <= 0) {
        res.status(400).json({ error: "ID de usuario inválido" });
        return;
      }

      const eliminado = await this.userUseCase.eliminarUsuario(id);

      if (eliminado) {
        res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
      } else {
        res.status(400).json({ error: "No se pudo eliminar el usuario" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}
