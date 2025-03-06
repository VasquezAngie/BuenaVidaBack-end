import RepositoryInterface from "../../../../repository/domain/RepositoryInterface";
import Order from "../../Order/Order";

export default interface OrderRepositoryPort extends RepositoryInterface<string, Order>{
  
}