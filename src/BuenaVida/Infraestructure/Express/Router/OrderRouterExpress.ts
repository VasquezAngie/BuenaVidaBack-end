import express from "express";
import OrderUseCaseFactory from "../../Factory/OrderUseCaseFactory";
import OrderControllerExpress from "../Controller/OrderControllerExpress";

const router = express.Router();
const orderController = new OrderControllerExpress(OrderUseCaseFactory.create());

router.get("/orders", orderController.getAllOrders.bind(orderController));
router.get("/orders/:id", orderController.getOrderById.bind(orderController));

export default router;