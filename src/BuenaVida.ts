import BuenaVidaFactory from "./BuenaVida/Infraestructure/Factory/BuenaVidaFactory"
import ServerFactory from "./Express/infrastructure/factory/ServerFactory"

console.log("Index?")
console.log("Starting application...");
console.log("Application started successfully.");
console.log("Index?");

// const server = ServerFactory.create([exampleRoute])
// server.start()

const BuenaVidaRouter = BuenaVidaFactory.create()

const routers = [BuenaVidaRouter]

const server = ServerFactory.create(routers)
server.start()

