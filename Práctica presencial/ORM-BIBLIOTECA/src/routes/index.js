import { Router } from "express";


import authorRoutes from "./authorRoutes.js";
import bookRoutes from "./bookRoutes.js";
import loanRoutes from "./loanRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import userRoutes from "./userRoutes.js";
const router = Router();

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);
router.use("/loans", loanRoutes);
router.use("/reviews", reviewRoutes);
router.use("/users", userRoutes);

export default router;