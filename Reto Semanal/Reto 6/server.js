import express from "express";
import colors from "colors";

//Crea instancia de app
const app = express();

//Base de datos ficticia.
let tasks = [
    { id: 1, des: "Estudiar Node", status: "done" },
    { id: 2, des: "Estudiar Base de datos", status: "pendding" },
    { id: 3, des: "Cantar en ingles", status: "done" },
    { id: 4, des: "Editar videos de youtube", status: "pendding" }
];

//Midleware
app.use(express.json());
// Verifica que exista el array de datos
const verificateArray = () => {
    if (!(tasks.length >= 0) || tasks === null || tasks === undefined) {
        return null;
    }
    return tasks;
};
// Verifica que el registro pedido no este vacio
const verificateContent = (req, res) => {
    const desc = req.body.desc;
    if (desc === "") {

        throw new Error("La tarea no puede estar vacia");
    }
    const trimed = desc.trim();
    if (trimed.length < 2) {
        throw new Error("La tarea debe contener como minimo 2 letras")
    }
    return trimed;
}

// Verifica que exista el id
const verificateId = (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        throw new Error("El id debe ser un número entero");
    };
    if (id < 0) {
        throw new Error("El número de id debe ser igual o mayor a cero.")
    };
    const index = tasks.findIndex(i => i.id === id)
    if (index === -1) {
        throw new Error("Debes indicar un registro existente");
    };
    return index;
}
//Mostrar todos los datos
app.get("/api/tasks", (req, res) => {
    const tasks = verificateArray();
    if (tasks === null) {
        res.status(400).json({ message: "La lista no existe" });
    }
    res.json({ tasks });
});
//Mostrar un solo dato
app.get("/api/tasks/:id", (req, res) => {
    const tasks = verificateArray();
    if (tasks === null) {
        res.status(400).json({ message: "La lista no existe" });
    }

    try {

        const index = verificateId(req, res);

        const task = tasks[index];

        res.json({ task });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Crear un nuevo registro
app.post("/api/tasks", (req, res) => {
    try {
        const desc = verificateContent(req, res);
        const newTask = {
            id: tasks[tasks.length - 1].id + 1,
            des: desc,
            status: "pendding"
        }
        tasks.push(newTask);
        res.status(201).json({ message: "Tarea creada corretamente" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


});

// Modificar una tarea
app.put("/api/tasks/:id", (req, res) => {
    const tasks = verificateArray();
    if (tasks === null) {
        res.status(400).json({ message: "La lista no existe" });
    }

    try {

        const index = verificateId(req, res);
        const desc = verificateContent(req, res);
        tasks[index].des = desc;
        const task = task[index];


        res.json({ task });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.delete("/api/tasks/:id", (req, res) => {

});

app.listen(3000, () => {
    console.log(colors.cyan("El Servidor se ha montado. :)"))
});