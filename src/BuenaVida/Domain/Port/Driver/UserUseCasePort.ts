export default interface UserUseCasePort {
  crearUsuario(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    password: string
  ): Promise<boolean>;

  actualizarUsuario(
    id: number,
    email?: string,
    password?: string
  ): Promise<boolean>;
  eliminarUsuario(id: number): Promise<boolean>;
  iniciarSesion(
    email: string,
    password: string
  ): Promise<{ token: string } | null>;
  cerrarSesion(userId: string): Promise<void>;
}
