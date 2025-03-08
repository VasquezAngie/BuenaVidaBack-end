import { Router } from "express";
import RouterExpressInterface from "../../../../Express/domain/RouterExpressInterface";

export default interface UserRouterExpressInterface extends RouterExpressInterface {
  getRouter(): Router;
}
