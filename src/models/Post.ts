import { Schema, model, Document } from "mongoose";

// type use kre natthe methana, Document kyna component eken extends krnna bari nisa.
export interface IPost extends Document{
    title: string;
    description: string;
    hoursCount: Number
    lecturerName: string;
    tags: Array<string>;
    categoryId: string;
};

const PostSchema = new Schema(
    {
        title:{
            type:String,
            required: true,
        },

        description: {
            type:String,
            required:true
        },

        hoursCount: {
            type: Number,
            required: true
        },

        lecturerName: {
            type: String,
            required: true
        },

        tags: {
            type: Array<String>,
            required: true
        },

        categoryId: {
            type: String,
            required:true
        }
    }, {timestamps: true}
);

export const Post = model<IPost>("Post", PostSchema);