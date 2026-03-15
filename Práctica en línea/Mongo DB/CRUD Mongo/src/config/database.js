import mongoose from "mongoose";
const connectDB = async(app) => {
    const strConnection = 'mongodb://localhost:27017/practica09';
    try{
        await mongoose.connect(strConnection,{
            useNewUrlParser:true,
            useUnidiedTopology:true
        });
        console.log('Mongo DB is connected');
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;