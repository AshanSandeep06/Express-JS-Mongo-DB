import { Schema, model, Document } from "mongoose";

export interface IPost extends Document{
    title: String;
    description: String;
    hoursCount: Number
    lecturerName: String;
    tags: Array<String>;
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
        }
    }, {timestamps: true}
);

export const Post = model<IPost>("Post", PostSchema);