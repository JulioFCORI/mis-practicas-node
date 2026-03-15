import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:['simple','family']
    },
    name: {
        type:String,
        required:true
    },
    maxCapacity:{
        type: Number,
        required:true
    }
});
export default Room = mongoose.model("Room",roomSchema);