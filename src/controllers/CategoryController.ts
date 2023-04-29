import { RequestHandler, Request, Response } from "express";
import { Category } from "../models/Category";

export default class CategoryController {
    createCategory: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            let newCategory = new Category(req.body);
            let response = await newCategory.save();

            return res.status(200).json({message: "New Category Added", response: response});

        }catch (error: unknown) {
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown Error Occured..!"});
            }
        }
    };

    retrieveAllCategories: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            let allCategories = await Category.find();

            return res.status(200).json({message: "Loaded All Categroies", response: allCategories});
        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown Error Occured..!"});
            }
        }
    };

    updateCategory: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            //Desctructuring assignment
            const { id } = req.params;

            let updatedCategory = await Category.findByIdAndUpdate(id, req.body, {new: true});

            return res.status(200).json({message: "Category has been Updated..!", response: updatedCategory});

        }catch(error: unknown) {
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown Error Occured..!"});
            }
        }
    };

    deleteCtaegory: RequestHandler = async(req: Request, res: Response):Promise<Response> => {
        try{
            const { id } = req.params;
            let deletedCategory = await Category.findByIdAndDelete(id);

            if(!deletedCategory){
                throw new Error("Something Went wrong");
            }

            return res.status(200).json({message: "Category has been Deleted..!", response: deletedCategory});

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown Error Occured..!"});
            }
        }
    }
}