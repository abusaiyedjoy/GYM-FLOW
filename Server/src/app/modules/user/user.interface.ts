import { Types } from "mongoose";

export enum isActive {
    ACTIVE = "active",
    INACTIVE = "inactive",
    BLOCK = "block"
};
export enum Role {
    USER = "user",
    ADMIN = "admin",
    SUPER_ADMIN = "super-admin",
    GUIDE = "guide"
};
export interface IAuthProvider {
    provider : string,
    providerId : string
}


export interface IUser {
    id: Types.ObjectId;
    name?: string;
    email: string;
    password?: string;
    phone?: string;
    address?: string;
    picture?: string;
    isDeleted?: boolean;
    isActive?: isActive;
    isVerified?: boolean;
    role: Role;
    auth: IAuthProvider[];
    bookings?: Types.ObjectId[];
    guides?: Types.ObjectId[];
}