import { Router } from "express";
import RouterExpressInterface from "../../../../Express/domain/RouterExpressInterface";

export interface CarritoRouterExpressInterface extends RouterExpressInterface{
  configureRoutes(): Router;
}
