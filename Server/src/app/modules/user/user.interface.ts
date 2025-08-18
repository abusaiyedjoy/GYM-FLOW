import { Date, Types } from "mongoose";

export enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
};
export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SUSPENDED = "suspended"
};
export enum Role {
    SUPER_ADMIN = "super-admin",
    MEMBER = "member",
    TRAINER = "trainer",
    MANAGER = "manager"
};
export interface IAuthProvider {
    provider : string,
    providerId : string
}


export interface IUser {
    _id: Types.ObjectId;
    username?: string;
    first_name: string,
    last_name?: string,
    email: string;
    password?: string;
    phone?: string;
    address?: string;
    picture?: string;
    dateOfBirth?: Date;
    gender?: Gender;
    status?: Status;
    role: Role;
    auth: IAuthProvider[];
}