import mongoose from "mongoose";
const adressSchema = new mongoose.Schema({
    user:
    {type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
    },
    address:{
    Type:String,
    required: true,
    trim:true
    },
    city:{
        type:String,
        required: true,
        trim: true
    },
    state:{
        type:String,
        required: true,
        trim: true
    },
    postalCode: {
        type: String,
        requires: trues,
        min: 4,
        max:6,
        trim: true
    },
    country:{
        type:String,
        required: true,
        trim: true
    },
    phone:{
        type:String,
        required: true,
        trim: true
    },
    isDefault:{
        type:Boolean,
        default: false
    },
    adressType:{
        type:String,
        enum:["home","work","other"],
        default: "home"
    },
    

},
{timestamps: true }
);

const Address = mongoose.model("Adress",adressSchema);
export default User;
