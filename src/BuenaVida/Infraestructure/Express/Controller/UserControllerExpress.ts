import { Request, Response } from "express";
import { UserControllerExpressInterface } from "../../../Domain/interfaces/UserControllerExpressInterface";
import UserUseCasePort from "../../../Application/UseCase/UserUseCase";

export class UserControllerExpress implements UserControllerExpressInterface {
  private userUseCase: UserUseCasePort;

  constructor(userUseCase: UserUseCasePort) {
    this.userUseCase = userUseCase;
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { id, nombre, apellidos, email, password } = req.body;
    try {
      const result = await this.userUseCase.crearUsuario(
        id,
        nombre,
        apellidos,
        email,
        password
      );
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: "Error creating user" });
    }
  }

  async loginUser(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    try {
      const token = await this.userUseCase.iniciarSesion(email, password);
      if (!token)
        return res.status(401).json({ message: "Invalid credentials" });
      res.cookie("auth_token", token.token, { httpOnly: true });
      return res.status(200).json({ message: "Login successful" });
    } catch (error) {
      return res.status(500).json({ message: "Error logging in" });
    }
  }

  async logoutUser(_req: Request, res: Response): Promise<Response> {
    try {
      res.clearCookie("auth_token");
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      return res.status(500).json({ message: "Error logging out" });
    }
  }
}
