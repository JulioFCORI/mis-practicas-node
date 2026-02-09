import express from "express";
import colors from "colors";

//Simulation of Database
let notes = [
    {
        id: 1,
        title: "Informatica",
        desc: "Revisión de Kioskos",
    },
    {
        id: 2,
        title: "Suministros",
        desc: "Checar monederos piso de venta",
    },
    {
        id: 3,
        title: "Administración",
        desc: "Enviar boletas",
    },
    {
        id: 4,
        title: "Envios",
        desc: "Recepcionar mercancia",
    },
    {
        id: 5,
        title: "Gerencia",
        desc: "Verificar venta al momento",
    },
    {
        id: 6,
        title: "Suministros",
        desc: "Repartir suministros",
    },
]

//Create Server
const app = express();

//Midleware
app.use(express.json());

//Aditional Functions
const verifyArray = () => {
    if (notes.length === null || notes.length === undefined || notes.length < 0) {
        return null;
    }
    return notes;
}

//Methods
//===================================================================================================================================
//GET Show the complete listOfNotes.json
app.get("/notes", (req, res) => {
    const listNote = verifyArray();
    if (listNote === null) {
        res.status(400).json({ message: "No existe la lista que esta intentado llamar" });
    }
    res.json({ listNote });
});

//POST Create new Note
app.post("/notes", (req, res) => {
    const listNote = verifyArray();
    if (listNote === null) {
        res.status(400).json({ message: "No existe la lista que esta intentado llamar" });
    }
    const { title, desc } = req.body;
    if (!title) {
        res.status(400).json({ error: "El título es obligatorio" });
        return
    }
    const titleTrimed = title.trim();
    if (titleTrimed === "" || titleTrimed === null || titleTrimed === undefined) {
        res.status(400).json({ error: "El título no puede estar vacio" });
        return
    }
    if(!desc){
                res.status(400).json({ error: "Debe existir una descripción" });
                return
    }
    const descTrimed = desc.trim();
    if (descTrimed === "" || descTrimed === null || descTrimed === undefined || descTrimed.length < 10) {
        res.status(400).json({ error: "El contenido debe tener al menos 10 caracteres" });
        return
    }

    const newNote = {
        id: (notes[notes.length - 1].id)+1,
        title: titleTrimed,
        desc: descTrimed
    }
    notes.push(newNote);
    res.status(201).json({message: "La nota se agrego con exito."})
})

//===================================================================================================================================
//Listening server
app.listen(3000, () => {
    console.log(colors.green("Server is Executing in port 3000"))
})