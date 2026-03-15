import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    room:{
        type: mongoose.Types.ObjectId,
        requires: true
    },
    startDate:{
        type:Date,
        required: true
    },
    endDate:{
       type:Date,
       required:true
    },
    occupants:{
        type:Number,
        required: true
    }
});

export default moongose.model("Reservation",reservationSchema);