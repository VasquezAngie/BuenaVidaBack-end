import { AuthPort } from "../../../Domain/Port/Driven/AuthPort";
import AuthRepository from "../../db/AuthRepository";


export default class UserRepositoryFactory {
  public static create(): AuthPort {
    return new AuthRepository();
  }
}