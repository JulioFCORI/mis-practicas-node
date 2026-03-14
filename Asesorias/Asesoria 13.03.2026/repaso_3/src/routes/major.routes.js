import { Router } from "express";
import { createMajor, deleteMajor, getAllMajors, getMajorByID, updateMajor } from '../controllers/major.js';

const router = Router();

router.get('/', getAllMajors);
router.get('/:id', getMajorByID);
router.post('/', createMajor);
router.put('/:id', updateMajor);
router.delete('/:id', deleteMajor);


export default router;
