import { Router } from "express";

import authorRoutes from "./authorRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.get("/authors", authorRoutes);
router.get("/user",userRoutes);

export default router;