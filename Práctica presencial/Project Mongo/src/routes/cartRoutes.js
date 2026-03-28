import express from "express";
import { param } from "express-validator";
import {
  getCarts,
  getCartById,
  getCartByUser,
  createCart,
  updateCart,
  deleteCart,
} from "../controllers/cartController.js";
import validate from "../middlewares/validation.js";

const router = express.Router();

const cartIdValidation = [
  param("id")
    .isMongoId()
    .withMessage("Cart ID must be a valid MongoDB ObjectId"),
];

const userIdValidation = [
  param("id")
    .isMongoId()
    .withMessage("Cart ID must be a valid MongoDB ObjectId"),
];

const putCartValidation = [
  param("id")
    .isMongoId()
    .withMessage("Card ID must be a validate Mongo DB ObjectId"),
  body("user").isMongoId().notEmpty().withMessage("User must be required"),
  body("product")
    .notEmpty()
    .withMessage("User must be required")
    .isArray()
    .withMessage("Products must be an array"),
    body("products.*.products")
    .notEmpty()
    .withMessage("Each product item must include product ID")
    .isMongoId()
    .withMessage("Each product must be a valid MongoDB ObjectId")
    .body("products.*.quantity")
    .notEmpty()
    .withMessage("Each product item must include quantity")
    .isInt(({min:1}))
    .withMessage("Quantity must be an integer greather than or equal to 1");
    
];

router.get("/cart", getCarts);
router.get("/cart/:id", cartIdValidation, validate, getCartById);
router.get("/cart/user/:id", userIdValidation, validate, getCartByUser);
router.post("/cart", createCart);
router.put("/cart", updateCart);
router.delete("/cart", cartIdValidation, validate, deleteCart);

export default router;
