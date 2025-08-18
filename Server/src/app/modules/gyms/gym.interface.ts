import { Types } from "mongoose";


export interface IGym {
    _id: Types.ObjectId,
    name: string,
    address: string,
    city: string,
    state: string,
    phone: string,
    email: string,
    description: Text,
    facilities: Text,
    operating_hours: string,
};