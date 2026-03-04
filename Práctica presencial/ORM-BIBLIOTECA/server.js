import express from "express";
import { routes } from "./src/routes/index.js";
import sequelizeConnection from "./src/config/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api",routes);

sequelizeConnection
.authenticate()
.then(() => console.log("MySql connection is successfylly"))
.catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log("Server running");
})