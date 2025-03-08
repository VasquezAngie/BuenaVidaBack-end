import ProductRepositoryPort from "../../../Domain/Port/Driven/ProductRepositoryPort";
import ProductRepository from "../../db/ProductRepository";

export default class ProductRepositoryFactory {
    public static create(): ProductRepositoryPort {
      return new ProductRepository();
    }
  }