import express from "express";
import routes from "./src/routes/index.js"

//Cretae Server with express
const app = express();
//Middleware
app.use(express.json());
app.use("/api",routes);


//Declare port to listen
const PORT = 3000;
app.listen(PORT,() =>{
    console.log("Server is executing in PORT 3000");
})