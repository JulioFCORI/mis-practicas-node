import express from "express";
import colors from "colors";

//Crea instancia de app
const app = express();

//Base de datos ficticia.
let tasks = [
    {id: 1, des: "Estudiar Node", status: "done"},
    {id: 2, des: "Estudiar Base de datos", status: "pendding"},
    {id: 1, des: "Cantar en ingles", status: "done"},
    {id: 1, des: "Editar videos de youtube", status: "pendding"}
];

//Midleware
app.use(express.json());

app.get("/api/tasks",(req, res) => {

});

app.get("/api/tasks/:id",(req, res) => {

});

app.post("/api/tasks", (req, res) => {

});

app.put("/api/tasks/:id", (req, res) => {

});

app.delete("/api/tasks/:id", (req, res) => {

});

app.listen(3000,() => {
    console.log(colors.cyan("El Servidor se ha montado. :)"))
});