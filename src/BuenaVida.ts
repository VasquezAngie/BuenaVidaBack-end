import BuenaVidaFactory from "./BuenaVida/Infraestructure/Factory/BuenaVidaFactory"
import OrderRouterFactory from "./BuenaVida/Infraestructure/Factory/OrderRouterFactory";
import ServerFactory from "./Express/infrastructure/factory/ServerFactory"

console.log("Index?")
console.log("Starting application...");
console.log("Application started successfully.");
console.log("Index?");

// const server = ServerFactory.create([exampleRoute])
// server.start()

const OrderRouter = OrderFactory.create()
const BuenaVidaRouter = BuenaVidaFactory.create()
const BuenaVidaRouter = BuenaVidaFactory.create()
const BuenaVidaRouter = BuenaVidaFactory.create()
const BuenaVidaRouter = BuenaVidaFactory.create()

OrderRouterFactory


const routers = [BuenaVidaRouter, orderFact]

const server = ServerFactory.create(routers)
server.start()

