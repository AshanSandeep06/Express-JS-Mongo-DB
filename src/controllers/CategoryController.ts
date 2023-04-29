import { RequestHandler, Request, Response } from "express";

export default class CategoryController {
    createCategory: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    retrieveAllCategories: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updateCategory: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    deleteCtaegory: RequestHandler = async(req: Request, res: Response):Promise<Response> => {
        return res;
    }
}