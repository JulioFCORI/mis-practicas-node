import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    products:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required: true
        },
        quantity:{
            type: Number,
            required: true,
            min:1
        },
        price:{
            type: Number, 
            required:true
        }
    }],
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Address",
        required:true
    },
    paymentMethod:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"PaymentMethod",
        required:true
    },
    shippingCost:{
        type: Number,
        required:true,
        default: 0
    },
    totalPrice:{
        type: Number,
        required: true
    },
    status:{
        type:String,
        enum:["pending","processong","shipped","delivered","cancelled"]
    },
    paymentStatus:{
        type: String,
        enum: ["pending", "paid", "failed", "refunded"],
        default: "pending"
    }
},
{timestamps: true}
);

const Order = moongose.model("Order",OrderSchema);

export default Order;