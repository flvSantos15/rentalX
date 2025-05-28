import { AuthenticateUserController } from "@modules/account/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authenticationRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

// @ts-ignore
authenticationRoutes.post("/sessions", authenticateUserController.handle);

export { authenticationRoutes };
