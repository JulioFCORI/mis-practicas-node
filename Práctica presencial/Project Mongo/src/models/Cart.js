import mongoose, { Schema } from "mongoose";
import User from "./User.js";
import Product from "./Product.js";

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity:{
                type:Number,
                required: true,
                min:1
            },
        }
    ]
},
{timeseries: true}
);
const Cart = mongoose.model("Cart",Schema);

export default Cart;