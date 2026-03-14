import mongoose, { Types } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        Type:String,
        required: true
    },
    edad:{
        type: Number
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
});

const User = mongoose.Model{'User',UserSchema};

export User;