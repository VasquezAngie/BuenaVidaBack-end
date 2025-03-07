import UserInterface from "../../Domain/Usuario/AbstractUser";
export default interface UserServiceInterface {
  registrarUsuario(usuario: UserInterface): Promise<boolean>;
  actualizarUsuario(
    id: number,
    email?: string,
    password?: string
  ): Promise<boolean>;
  eliminarUsuario(id: number): Promise<boolean>;
  obtenerCredenciales(
    email: string
  ): Promise<{ id: number; password: string } | null>;
}
