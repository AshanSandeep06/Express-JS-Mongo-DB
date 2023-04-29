import { Router } from "express";
import PostRoutes from "./PostRoutes";
import CategoryRoutes from "./CategoryRoutes";

const router: Router = Router();

const url_prefix = "/api/v1";

// Methana router ekk use kre => /api/v1/post/? kyna path eka yatathe mkkhri path ekk match wenwwda kyla
// Baleema sadaha.
router.use(`${url_prefix}/post`, new PostRoutes().getRouter);
router.use(`${url_prefix}/category`, new CategoryRoutes().getRouter);

export default router;