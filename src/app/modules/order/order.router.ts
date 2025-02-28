import { Router } from "express";
import { OrderControllerIs } from "./order.controller";



const orderRouter = Router();

orderRouter.post('/', OrderControllerIs.OrderCreate);
orderRouter.get('/revenue', OrderControllerIs.RevenueController)

export default orderRouter;