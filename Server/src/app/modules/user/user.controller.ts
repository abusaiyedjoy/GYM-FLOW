import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status-codes";
import { sendResponse } from "../../utils/sendResponse";


const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserService.createUser(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User created successfully",
        data: user,
    });
};

export const userController = { createUser };
