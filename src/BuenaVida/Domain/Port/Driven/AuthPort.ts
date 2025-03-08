import { Response } from "express";

export interface AuthPort {
  readonly secret: string;
  generateToken(userId: string): Promise<string>;
  validateToken(token: string): Promise<string | null>;
  authenticateUser(
    email: string,
    password: string,
    res: Response<any>
  ): Promise<boolean>;
  logoutUser(res: Response<any>): Promise<void>;

  verifyCredentials(
    email: string,
    password: string
  ): Promise<{ id: string } | null> 

  registerUser(
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    password: string
  ): Promise<{ id: string }> 

  updateUser(
    id: number,
    email?: string,
    password?: string
  ): Promise<boolean> 


  deleteUser(id: number): Promise<boolean>
  
  getUserByEmail(
    email: string
  ): Promise<{ id: number; password: string } | null>

}
