import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { userServices } from "./user.sevice";

const createUser = catchAsync(async (req: Request, res: Response) => {

        const result = await userServices.createUser();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Admin Created successfuly!",
            data: result
        })
    });

    export const userController = {
    createUser
    }