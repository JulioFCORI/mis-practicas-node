import express from "express";
import bookRoutes from "./src/routes/bookRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/books",bookRoutes);

app.listen(3000, () =>{
    console.log("Server running on 3000 port");
})
