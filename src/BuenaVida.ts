import OrderRouterFactory from "./BuenaVida/Infraestructure/Factory/OrderRouterFactory";
import ServerFactory from "./Express/infrastructure/factory/ServerFactory";

console.log("Index?");
console.log("Starting application...");
console.log("Application started successfully.");
console.log("Index?");

// const server = ServerFactory.create([exampleRoute])
// server.start()

const orderRouter = OrderFactory.create();
const producRouter = ProductFactory.create();
const userRouter = UsuarioFactory.create();
const cartRouter = CartFactory.create();
const orderDetailRouter = OrderDetailFactory.create();

OrderRouterFactory;

const routers = [
  orderRouter,
  producRouter,
  userRouter,
  cartRouter,
  orderDetailRouter,
];

const server = ServerFactory.create(routers);
server.start();
