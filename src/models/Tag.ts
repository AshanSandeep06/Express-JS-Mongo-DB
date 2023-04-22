import { Schema, Document, model } from "mongoose";

export interface ITag extends Document {
    text: String;
}

const TagSchema = new Schema({
    text: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Tag = model<ITag>("Tag", TagSchema);