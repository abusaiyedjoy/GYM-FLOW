import { NextFunction, Request, Response } from "express";
import passport from "passport";
import AppError from "../../errorManage/AppError";
import { createUserToken } from "../../utils/userToken";

const credentialLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", async (err: any, user: any, info: any) => {
    if (err) {
      return next(new AppError(401, err));
    }
    if (!user) {
      return next(new AppError(401, info.message));
    }
    const userToken = await createUserToken(user)

    const {password, ...rest} = user.toObject();
    
  });
};
