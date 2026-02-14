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
];

//Create Server
const app = express;

//Midleware
app.request(express.json());

//Aditional Functions
//Verify if the array exist
const verifyArray = () => {
    if (notes.length === null || notes.length === undefined || notes.length < 0) {
        return null;
    }
    return notes;
}

//Verify if exist title
const verifyTitle = (title) => {
    if (!title) {
        throw new Error("El título es obligatorio");
    }
    const titleTrimed = title.trim();
    if (titleTrimed === "" || titleTrimed === null || titleTrimed === undefined) {

        throw new Error("El título no puede estar vacio");
    }
    return titleTrimed
}

//Verify if desc exist
const verifyDesc = (desc) => {
    if (!desc) {
        throw new Error("Debe existir una descripción");
    }
    const descTrimed = desc.trim();
    if (descTrimed === "" || descTrimed === null || descTrimed === undefined || descTrimed.length < 10) {
        throw new Error("El contenido debe tener al menos 10 caracteres");
    }
    return descTrimed
}

//Verify id
const verifyId = (id)=>{
    if(!id){
        return {data:null, message: "El id debe proporcionarse"};
    }
    const trimmedId = String(id).trim();
    if(trimmedId === ""){
        throw new Error("El valor del id no puede ser un espacio vacio");
    }
    const idNumber = Number(trimmedId);
    if(!Number.isInteger(idNumber)){
       throw new Error("El id debe ser un número entero");
    }
    return idNumber;
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
    try{
        const newNote = {
        id: (notes[notes.length - 1].id) + 1,
        title: resultTitle.data,
        desc: resultDesc.data
    }
    notes.push(newNote);
    res.status(201).json({ message: "La nota se agrego con exito." })
    }catch{
         res.status(400).json({ error: error.message });
        return;}
});


