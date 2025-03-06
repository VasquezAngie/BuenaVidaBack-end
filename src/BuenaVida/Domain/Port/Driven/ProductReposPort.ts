import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Product from "../../Product/Product";


export default interface ProductRepositoryPort
  extends RepositoryInterface<string, Product> {}
