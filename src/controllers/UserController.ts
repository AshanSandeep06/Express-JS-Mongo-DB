import { RequestHandler, Request, Response } from "express";


export default class UserController{
    createUser: RequestHandler = async (req:Request, res:Response): Promise<Response> => {
        // Create User Operation
        return res;
    }

    // asyncronus by default false wela enne, mehema reference ekakata assign krma asynchronus true wenwa.
    signIn = async(req: Request, res:Response):Promise<Response> => {
        // Sign In Operation
        return res;
    };
}