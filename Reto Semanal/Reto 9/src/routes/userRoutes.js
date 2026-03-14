import { Router } from "express";
import {getUsers, getUserById} from "../controller/userController.js";

const router = Router();

router.get("/",getUsers);
router.get("/:id",getUserById);

export default router;