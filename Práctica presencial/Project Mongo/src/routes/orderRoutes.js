import express from 'express';
import {getOrderById,getOrders,createOrder,updateOrderStatus} from '../controllers/orderContoller.js';


const router = express.Router();

router.get("/",getOrders);
router.get("/:id",getOrderById);
router.post("/",createOrder);
router.put("/:id", updateOrderStatus);

export default router;