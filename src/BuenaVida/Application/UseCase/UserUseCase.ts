import UserUseCasePort from "../../Domain/Port/Driver/UserUseCasePort";
import UserServiceInterface from "../../Domain/interfaces/UserServiceInterface";
import jwt from "jsonwebtoken";
import User from "../../Domain/Usuario/User";

export default class UserUseCase implements UserUseCasePort {
  private userService: UserServiceInterface;

  constructor(userService: UserServiceInterface) {
    this.userService = userService;
  }

  async crearUsuario(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    contraseña: string
  ): Promise<boolean> {
    const usuario = new User({
      id,
      nombre,
      apellidos,
      email,
      contraseña,
      rol: "usuario",
    });
    return await this.userService.registrarUsuario(usuario);
  }

  async actualizarUsuario(
    id: number,
    email?: string,
    password?: string
  ): Promise<boolean> {
    return await this.userService.actualizarUsuario(id, email, password);
  }

  async eliminarUsuario(id: number): Promise<boolean> {
    return await this.userService.eliminarUsuario(id);
  }

  async iniciarSesion(
    email: string,
    password: string
  ): Promise<{ token: string } | null> {
    const user = await this.userService.obtenerCredenciales(email);
    if (!user || user.password !== password) {
      return null;
    }
    const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "1h" });
    return { token };
  }

  async cerrarSesion(userId: string): Promise<void> {
    console.log(`Usuario ${userId} ha cerrado sesión`);
  }
}
