import Product from "../Product/Product";

export default interface BuenaVidaServiceInterface {
  retrieveProducts(): Promise<Product[]>
}