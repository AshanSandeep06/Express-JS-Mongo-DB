import { RequestHandler, Request, Response } from "express";
import mongoose, { ClientSession } from "mongoose";
import { Category } from "../models/Category";
import { Post } from "../models/Post";
import { Tag } from "../models/Tag";

export default class PostController {
    // async ---> asynchronous function ekk
    getAllPosts: RequestHandler = async (req: Request, res: Response): Promise<Response> => {
        try{
            let allPosts = await Post.find();
            return res.status(200).json({message: "Load All Posts", response: allPosts});

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown Error Occured..!"});
            }
        }
    };

    createPost = async(req: Request, res: Response): Promise<Response> => {
        let session: ClientSession | null = null;

        try{
            const { categoryName } = req.body;

            session = await mongoose.startSession();
            session.startTransaction();

            let category = await Category.findOne({categoryName: categoryName}).session(session);
            if(!category){
                category = new Category({categoryName: categoryName});
                category = await category.save();
            }

            let newPost = new Post(req.body);
            newPost.categoryId= category._id.toString();
            newPost = await newPost.save();

            //Getting tags from request body
            const tags = req.body.tags;

            //Saving Tags
            if(tags.length > 0){
                for (let i = 0; i < tags.length; i++) {
                    let tag = await Tag.findOne({text: tags[i]});
                    if(!tag){
                        tag = new Tag({text: tags[i]});
                        tag = await tag.save();
                    }
                }
            }

            await session.commitTransaction();
            session.endSession();

            return res.status(200).json({message: "New Post has been Created..!", response: newPost});

        }catch(error: unknown){
            if(session != null){
                try{
                    await session.abortTransaction();
                }catch(abortError){
                    console.log(`Error aborting transaction: ${abortError}`);
                }
            }

            if (error instanceof Error) {
                return res.status(500).json({ message: error.message });
              } else {
                return res.status(500).json({ message: "Unknown error occured." });
              }
        }
    };

    updatePost: RequestHandler = async(req: Request, res: Response): Promise<Response> => {
        try{
            const { id } = req.params;
            let updatedPost = await Post.findByIdAndUpdate(id, req.body, {new: true});
            return res.status(200).json({ message: "Post updated.", response: updatedPost });

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown error Occured..!"});
            }
        }
    }

    deletePost = async(req: Request, res: Response): Promise<Response> => {
        try{
            //Destructuring assignment
            const { id } = req.params;

            let deletedPost = await Post.findByIdAndDelete(id);
            if(!deletedPost){
                return res.status(500).json({message: "Something Went Wrong..!"});
            }else{
                return res.status(200).json({message: "Post has been Deleted..!"});
            }

        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error.message});
            }else{
                return res.status(500).json({message: "Unknown error Occured..!"});
            }
        }
    }
}