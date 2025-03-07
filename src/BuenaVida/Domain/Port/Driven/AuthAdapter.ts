import jwt from "jsonwebtoken";
import { Response } from "express";
import { AuthPort } from "../../Port/Driver/AuthPort";
import AuthRepository from "../../../Infraestructure/db/AuthRepository";

export class AuthAdapter implements AuthPort {
  private readonly secret = "mi_secreto";
  private readonly authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  generateToken(userId: string): string {
    return jwt.sign({ userId }, this.secret, { expiresIn: "1h" });
  }

  validateToken(token: string): string | null {
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
    const user = await this.authRepository.verifyCredentials(email, password);
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
}
