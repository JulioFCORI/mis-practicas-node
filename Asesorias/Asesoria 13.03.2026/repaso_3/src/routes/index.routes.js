import { Router } from "express";
import majorRoutes from './major.routes.js';

const router = Router();

router.use('/majors', majorRoutes);

export default router;