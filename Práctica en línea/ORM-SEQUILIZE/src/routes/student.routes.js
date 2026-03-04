import { Router } from "express";
import { getStudentsById, getStudents, createStudent } from "../controllers/student.controller";
const router = Router();

router.get('/',getStudents);
router.get('/:id', getStudentsById);
router.post('/', createStudent);

export default router;