import express from "express";
import taskController from "../controllers/taskController.js";
const router = express.Router();

router.get('/task',taskController.getTask);
router.post('/tasks',taskController.createTasks);
router.put('/tasks/:id',taskController.updateTasks);
router.delete('/task/:id',taskController.deleteTask);


export default router;