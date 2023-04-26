import express, { Router } from "express";
import PostController from "../controllers/PostController";

export default class PostRoutes {
    constructor(){
        // Router object ekata adala methods walata url mappings set krnwa.
        // getRouter() method eka call krnna kalin meka call wenawa constructor eke dapu nisa.
        this.configRoutes();
    }

    private router: Router = express.Router();

    private PostController: PostController = new PostController();

    private configRoutes = (): void => {
        // HTTP Methods
        // CreatePost method ekata url mapping ekk set kireema.
        // POST /api/v1/post
        this.router.post("/", this.PostController.createPost);

        // GET /api/v1/post
        this.router.get("/", this.PostController.getAllPosts);

        // Update ekedi data ekk ywana nisa mehema danna ona.
        // PUT /api/v1/post/id
        this.router.put("/:id", this.PostController.updatePost);

        //Delete eketh ehemai.
         // DELETE /api/v1/post/id
        this.router.delete("/:id", this.PostController.deletePost);
    }

    public getRouter = (): Router => {
        return this.router;
    }
}