import AuthRepository from "../../Infraestructure/db/AuthRepository";
import UserUseCasePort from "../UseCase/UserUseCase";
import jwt from "jsonwebtoken";

export default class UserService implements UserUseCasePort {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async crearUsuario(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      await this.authRepository.registerUser(
        id,
        nombre,
        apellidos,
        email,
        password
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  async actualizarUsuario(
    id: number,
    email?: string,
    password?: string
  ): Promise<boolean> {
    return await this.authRepository.updateUser(id, email, password);
  }

  async eliminarUsuario(id: number): Promise<boolean> {
    return await this.authRepository.deleteUser(id);
  }

  async iniciarSesion(
    email: string,
    password: string
  ): Promise<{ token: string } | null> {
    const user = await this.authRepository.verifyCredentials(email, password);

    if (!user) {
      return null; // Credenciales inválidas
    }

    // Generar token JWT
    const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "1h" });

    return { token };
  }

  async cerrarSesion(userId: string): Promise<void> {
    console.log(`Usuario ${userId} ha cerrado sesión`);
  }
}
