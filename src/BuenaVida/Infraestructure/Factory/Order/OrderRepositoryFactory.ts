import OrderRepositoryPort from "../../../Domain/Port/Driven/OrderRepositoryPort"
import OrderRepository from "../../db/OrderRepository"

export default class OrderRepositoryFactory {
  public static create(): OrderRepositoryPort {
    return new OrderRepository();
  }
}