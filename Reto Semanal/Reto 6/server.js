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

const verificateArray = () => {
    if(!tasks.length >= 0 || tasks === null || tasks === undefined){
        return
    }
}

app.get("/api/tasks",(req, res) => {
    verificateArray();
    res.json({tasks});

});

app.get("/api/tasks/:id",(req, res) => {
    verificateArray();
    const id = Number(req.params.id);
    if(!Number.isInteger(id)) return;
    if(id < 0) return;
    const index = tasks.findIndex(i => i.id === id)
    if( index === undefined) return;
    const task = tasks[index];

    res.json({task});


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