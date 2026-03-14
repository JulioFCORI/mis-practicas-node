import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config";

const app  = express();
app.use(express.json());

const port = 3000;

connectDB();
app.get("/",(req,res) => {
    res.send("API Ecommerce con Mongo")
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
}) 