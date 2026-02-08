import express from "express";
import { getUsers, getUserById, createUsers, updateUser, deleteUser } from "../controls/userControler.js";

const router = express.Router();

router.get("/users",getUsers);
router.get("/user/:id",getUserById);
router.post("/users",createUsers);
router.put("/users/:id",updateUser);
router.delete("/users/:id",deleteUser);


export default router;