import AppError from "../errorManage/AppError";
import httpStatus from "http-status-codes";
import { verifyToken } from "../utils/jwt";
import { envVars } from "../config/env";
import { User } from "../modules/user/user.model";
import { isActive } from "../modules/user/user.interface";
import { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export const checkAuth =
  (...authRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = req.headers.authorization;
      if (!accessToken) {
        throw new AppError(httpStatus.UNAUTHORIZED, "No token provided");
      }

      const verifiedToken = verifyToken(
        accessToken,
        envVars.JWT_ACCESS_SECRET
      ) as JwtPayload;
      const isUserExist = await User.findOne({ email: verifiedToken.email });
      if (!isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User does not exist");
      }
      if (
        isUserExist.isActive === isActive.BLOCK ||
        isUserExist.isActive === isActive.INACTIVE
      ) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          `User is ${isUserExist.isActive}`
        );
      }
      if (isUserExist.isDeleted) {
        throw new AppError(httpStatus.BAD_REQUEST, "User is deleted");
      }
      if (!authRoles.includes(isUserExist.role)) {
        throw new AppError(httpStatus.FORBIDDEN, "You are not authorized");
      }
      req.user = verifiedToken;
      next();
    } catch (error) {
      console.log("jwt error", error);
      next(error);
    }
  };
