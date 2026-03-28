import express from 'express';
import cartRoutes from './cartRoutes';
const router = express.router();
router.use(cartRoutes);

export default router;