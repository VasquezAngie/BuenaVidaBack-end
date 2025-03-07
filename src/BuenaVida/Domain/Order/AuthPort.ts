import { Response } from "express";

export interface AuthPort {
  generateToken(userId: string): string;
  validateToken(token: string): string | null;
  authenticateUser(
    email: string,
    password: string,
    res: Response<any>
  ): Promise<boolean>;
  logoutUser(res: Response<any>): void;
}
