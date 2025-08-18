import { model, Schema } from "mongoose";
import { IAuthProvider, IUser, Role } from "./user.interface";


const authProviderSchema = new Schema<IAuthProvider>({
    provider: {type: String, required: true},
    providerId: {type: String, required: true}
},{
    _id: false,
    versionKey: false
})

const userSchema = new Schema<IUser>({
    username: {type: String, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    phone: {type: String},
    picture: {type: String},
    address: {type: String},
    dateOfBirth: {type: Date},
    isVerified: {type: Boolean, default: false},
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
    isActive: {
        type: String,
        enum: Object.values(isActive),
        default: isActive.ACTIVE
    },
    auth: [authProviderSchema]
});

export const User = model<IUser>('User', userSchema);