import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
    categoryName: string;
};

const CategorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
});

export const Category = mongoose.model<ICategory>("Category", CategorySchema);