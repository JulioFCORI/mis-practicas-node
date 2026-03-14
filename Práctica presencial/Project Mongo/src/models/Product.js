import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,requires:true,trim:true},
    description:{type:String},
    price:{type:Number,requires:true},
    stock:{type:String,default: "https://placehold.co/600X400"},
    category:{type:mongoose.Schema.Types.ObjectId, ref: "Category"},
},
{timestamps: true}
);

const Product = mongoose.model("Product",productSchema);

export default Product;