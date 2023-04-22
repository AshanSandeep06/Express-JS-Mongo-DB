import { RequestHandler, Request, Response } from "express";

export default class PostController {
    getAllPosts: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
        return res;
    }

    createPost = async(req: Request, res: Response): Promise<Response> => {
        return res;
    };

    updatePost: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        return res;
    }

    deletePost = async(req: Request, res: Response): Promise<Response> => {
        return res;
    }
}