import express from "express";
import routes from "./src/routes/index.js";
import {sequelizeConnection} from "./src/models/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api",routes);

sequelizeConnection
.sync() //Si Existen
.then(() => console.log("MySql connection is successfylly"))
.catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log("Server running");
})