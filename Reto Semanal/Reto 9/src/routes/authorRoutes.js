import { Router } from "express";
import { getAuthors, getAuthorById } from "../controller/authorController.js";
//Creat routes for Author
const router = Router();

router.get("/",getAuthors);
router.get("/:id", getAuthorById);

export default router;
