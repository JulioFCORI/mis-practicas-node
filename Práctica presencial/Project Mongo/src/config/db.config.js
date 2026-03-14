import mongoose from "mongoose";
const connectDB = async () => {
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/ecommerce-db-test");
        console.log(`MogoDB connected ${connection.connection.host}`);

    }catch (error){
        console.error("Error connection MongoDB");
        process.exit(1);
    }
};

export default connectDB