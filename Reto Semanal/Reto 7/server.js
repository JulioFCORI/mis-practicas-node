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
//Verify if the array exists
const verifyArray = () => {
    if (notes.length === null || notes.length === undefined || notes.length < 0) {
        return null;
    }
    return notes;
}

//Verify if exist title
const verifyTitle = (title) => {
    if (!title) {
        return { data: null, message: "El título es obligatorio" }
    }
    const titleTrimed = title.trim();
    if (titleTrimed === "" || titleTrimed === null || titleTrimed === undefined) {

        return { data: null, message: "El título no puede estar vacio" }
    }

    return { data: titleTrimed, message: "El titulo se agrego correctamente" }
}

const verifyDesc = (desc) => {
    if (!desc) {
        return { data: null, message: "Debe existir una descripción" }
    }
    const descTrimed = desc.trim();
    if (descTrimed === "" || descTrimed === null || descTrimed === undefined || descTrimed.length < 10) {
        return { data: null, message: "El contenido debe tener al menos 10 caracteres" }
    }
    return { data: descTrimed, message: "La descripción se agrego correctamente" }
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
        return
    }


    const { title, desc } = req.body;
    const resultTitle = verifyTitle(title);
    const resultDesc = verifyDesc(desc);

    if (resultTitle.data === null) {
        res.status(400).json({ error: resultTitle.message });
        return;
    }

    if (resultDesc.data === null) {
        res.status(400).json({ error: resultDesc.message });
        return;
    }

    const newNote = {
        id: (notes[notes.length - 1].id) + 1,
        title: resultTitle.data,
        desc: resultDesc.data
    }
    notes.push(newNote);
    res.status(201).json({ message: "La nota se agrego con exito." })
})

//PUT Method
app.put("/notes/:id", () => {
    const listNote = verifyArray();
    if (listNote === null) {
        res.status(400).json({ message: "No existe la lista que esta intentado llamar" });
    }


});
//===================================================================================================================================
//Listening server
app.listen(3000, () => {
    console.log(colors.green("Server is Executing in port 3000"))
})