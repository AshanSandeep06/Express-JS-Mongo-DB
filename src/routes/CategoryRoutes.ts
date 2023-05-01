import express, { Router } from "express";
import CategoryController from "../controllers/CategoryController";

export default class CategoryRoutes {
    private router: Router = express.Router();
    private categoryController: CategoryController = new CategoryController();

    constructor (){
        this.configRoutes();
    }

    private configRoutes = (): void => {
         this.router.post("/", this.categoryController.createCategory);
         this.router.get("/", this.categoryController.retrieveAllCategories);
         this.router.put("/:id", this.categoryController.updateCategory);
         this.router.delete("/:id", this.categoryController.deleteCtaegory);
    }

    public getRouter = (): Router => {
        return this.router;
    }
}