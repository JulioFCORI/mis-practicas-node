import mongoose  from "mongoose";
import User from "./src/models/User.js";

mongoose.connect('mongodb://localhost:27017/users',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('MongoDB is connected');

}).catch((error)=> console.log(error))//Conectar tu propio puerto

