import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.config";
import router from "./src/routes";
import routes from "./src/routes";
import errorHandler from "./src/middlewares/errorHandler";
import logger from "./src/middlewares/logger";

const app  = express();
app.use(express.json());
app.use(logger)
app.use(errorHandler);


const port = 3000;

connectDB();
app.get("/",(req,res) => {
    res.send("API Ecommerce con Mongo")
});

app.use("/api",routes);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
}) 