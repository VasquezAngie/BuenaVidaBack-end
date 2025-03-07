import UserServiceInterface from "../../Domain/interfaces/UserServiceInterface";
import AuthRepository from "../../Infraestructure/db/AuthRepository";
import UserInterface from "../../Domain/Usuario/AbstractUser";

export default class UserService implements UserServiceInterface {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async registrarUsuario(usuario: UserInterface): Promise<boolean> {
    try {
      const id = usuario.getId();
      const nombre = usuario.getnombre();
      const apellidos = usuario.getApellidos();
      const email = usuario.getEmail();
      const password = usuario.getcontraseña();

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

  async obtenerCredenciales(
    email: string
  ): Promise<{ id: number; password: string } | null> {
    return await this.authRepository.getUserByEmail(email);
  }
}
