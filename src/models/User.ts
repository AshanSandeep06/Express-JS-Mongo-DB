import { Schema, model, Document } from "mongoose";

export interface IUser extends Document{
    username: String;
    password: String;
};

const UserSchema = new Schema(
    {
        username:{
            type:String,
            required: true,
        },

        password: {
            type:String,
            required:true
        },
    }, {timestamps: true}
);

export const User = model<IUser>("User", UserSchema);