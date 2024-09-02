import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controller";
const router = express.Router();
router.post("/post", userController.createUser);

export const userRoutes = router;
