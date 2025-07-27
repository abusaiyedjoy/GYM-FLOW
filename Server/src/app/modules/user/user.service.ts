import AppError from "../../errorManage/AppError";
import { IAuthProvider, IUser, Role } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { envVars } from "../../config/env";

const createUser = async (payload: Partial<IUser>) => {
  const { email, password, ...rest } = payload;

  const isUserExits = await User.findOne({ email });

  if (isUserExits) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exits");
  }

  const hashedPassword = await bcryptjs.hash(
    password as string,
    Number(envVars.BCRYPT_SALT_ROUND)
  );

  const authProvider: IAuthProvider = {
    provider: "credentials",
    providerId: email as string,
  };

  const user = await User.create({
    email,
    password: hashedPassword,
    auth: [authProvider],
    ...rest,
  });
  return user;
};

const getAllUsers = async () => {
  const users = await User.find();
  const totalUser = await User.countDocuments();

  return {
    data: users,
    meta: {
      total: totalUser,
    },
  };
};

const updateUser = async (
  userId: string,
  payload: Partial<IUser>,
  decodedToken: JwtPayload
) => {
  const isUserExits = await User.findById(userId);

  if (!isUserExits) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  if (payload.role) {
    if (decodedToken.role === Role.USER || decodedToken.role === Role.GUIDE) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        "You don't have permission to update role"
      );
    }
    if (payload.role === Role.SUPER_ADMIN && decodedToken.role === Role.ADMIN) {
      throw new AppError(httpStatus.FORBIDDEN, "You are not authorized");
    }
  }
  if(payload.isActive || payload.isVerified || payload.isDeleted){
    if (decodedToken.role === Role.USER || decodedToken.role === Role.GUIDE) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        "You don't have permission to update status"
      );
    }
  }
  if(payload.password){
    payload.password = await bcryptjs.hash(
      payload.password as string,
      Number(envVars.BCRYPT_SALT_ROUND)
    )
  }

  const updateUser = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true
  })
  return updateUser;
};

export const UserService = {
  createUser,
  getAllUsers,
  updateUser,
};
