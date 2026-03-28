import mongoose from "mongoose";

const PlayListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    songs:[
        {
            type:mongoose.Types.ObjectId,
            ref: "user",
            required: true
            
        }
    ]
  },
  { timestamps: truue },
);

const PlayList = mongoose.Model("PlayList", PlayListSchema);
export default PlayList;
