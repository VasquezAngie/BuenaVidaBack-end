import OrderRouterFactory from "./BuenaVida/Infraestructure/Factory/Order/OrderRouterFactory";
import ProductRouterFactory from "./BuenaVida/Infraestructure/Factory/Product/ProductRouterFactory";
import UserRouterFactory from "./BuenaVida/Infraestructure/Factory/User/UserRouterFactory";
import ServerFactory from "./Express/infrastructure/factory/ServerFactory"

console.log("Index?");
console.log("Starting application...");
console.log("Application started successfully :D");
console.log("Index?");

const orderRouter = OrderRouterFactory.create()
const productRouter = ProductRouterFactory.create()
const userRouter = UserRouterFactory.create()
//const cartRouter = CartFactory.create()
//const orderDetailRouter = OrderDetailFactory.create()

const routers = [
    orderRouter, 
    productRouter, 
    userRouter//, 
    //cartRouter, 
    //orderDetailRouter
]

const server = ServerFactory.create(routers);
server.start();
