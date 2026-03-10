import { Router } from "express";
import {getReviews, getReviewById,createReview,updateReview,deleteReview} from "../controller/reviewController.js"

const router = Router();

router.get("/",getReviews);
router.get("/:id",getReviewById);
router.post("/",createReview);
router.put("/:id",updateReview);
router.delete("/:id",deleteReview);

export default router
