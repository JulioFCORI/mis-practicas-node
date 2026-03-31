import express from 'express';
import cartRoutes from './cartRoutes';
import orderRoutes from './orderRoutes';
const router = express.router();
router.use(cartRoutes);
router.use(orderRoutes);

export default router;