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
};

//Verify if exist title
const verifyTitle = (title) => {
  if (!title) {
    return { data: null, message: "El título es obligatorio" };
  }
  const titleTrimed = title.trim();
  if (titleTrimed === "" || titleTrimed === null || titleTrimed === undefined) {
    return { data: null, message: "El título no puede estar vacio" };
  }

  return { data: titleTrimed, message: "El titulo se agrego correctamente" };
};

const verifyDesc = (desc) => {
  if (!desc) {
    return { data: null, message: "Debe existir una descripción" };
  }
  const descTrimed = desc.trim();
  if (
    descTrimed === "" ||
    descTrimed === null ||
    descTrimed === undefined ||
    descTrimed.length < 10
  ) {
    return {
      data: null,
      message: "El contenido debe tener al menos 10 caracteres",
    };
  }
  return {
    data: descTrimed,
    message: "La descripción se agrego correctamente",
  };
};

//Verify id
const verifyId = (id) => {
  if (!id) {
    return { data: null, message: "El id debe proporcionarse" };
  }
  const trimmedId = String(id).trim();
  if (trimmedId === "") {
    return {
      data: null,
      message: "El valor del id no puede ser un espacio vacio",
    };
  }
  const idNumber = Number(trimmedId);
  if (!Number.isInteger(idNumber)) {
    return { data: null, message: "El id debe ser un número entero" };
  }
  return { data: idNumber, message: "Id pasado correctamenet" };
};
//Methods
//===================================================================================================================================
//GET Show the complete listOfNotes.json
app.get("/notes", (req, res) => {
  const listNote = verifyArray();
  if (listNote === null) {
    res
      .status(400)
      .json({ message: "No existe la lista que esta intentado llamar" });
  }
  res.json({ listNote });
});

//POST Create new Note
app.post("/notes", (req, res) => {
  const listNote = verifyArray();
  if (listNote === null) {
    res
      .status(400)
      .json({ message: "No existe la lista que esta intentado llamar" });
    return;
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
    id: notes[notes.length - 1].id + 1,
    title: resultTitle.data,
    desc: resultDesc.data,
  };
  notes.push(newNote);
  res.status(201).json({ message: "La nota se agrego con exito." });
});

//PUT Method
app.put("/notes/:id", (req, res) => {
  //Verify Array
  const listNote = verifyArray();
  if (listNote === null) {
    res
      .status(400)
      .json({ message: "No existe la lista que esta intentado llamar" });
    return;
  }
  //Verify and Bring ID
  let id = req.params.id;
  const obtainId = verifyId(id);
  if (obtainId === null) {
    return res.status(404).json({ message: obtainId.message });
  }
  if (notes.find((note) => note.id === obtainId.data) === undefined) {
    return res.status(400).json({ message: "La nota especificada no existe" });
  }
  // Bring title and desc
  const { title, desc } = req.body;
  const obtainTitle = verifyTitle(title);
  const obtainDesc = verifyDesc(desc);
  if (title === undefined && desc === undefined) {
    return res
      .status(400)
      .json({
        message: "Debe agregarse almenos una descripció o titulo a cambiar",
      });
  }

  if (title !== undefined && desc === undefined) {
    if (obtainTitle.data === null) {
      return res.status(400).json({ error: obtainTitle.message });
    }
    const index = notes.findIndex((note) => note.id === obtainId.data);
    console.log(index);
    notes[index].title = obtainTitle.data;
    const modifyNote = notes[index];
    return res.status(201).json({ modifyNote });
  }
  if (title === undefined && desc !== undefined) {
    if (obtainDesc.data === null) {
      return res.status(400).json({ error: obtainDesc.message });
    }
    const index = notes.findIndex((note) => note.id === obtainId.data);
    notes[index].desc = obtainDesc.data;
    const modifyNote = notes[index];
    return res.status(201).json({ modifyNote });
  }
  if (title !== undefined && desc !== undefined) {
    if (obtainTitle.data === null) {
      return res.status(400).json({ error: obtainTitle.message });
    }
    if (obtainDesc === null) {
      return res.status_(400).json({ error: obtainDesc.message });
    }
    const index = notes.findIndex((note) => note.id === obtainId);
    notes[index].title = obtainTitle.data;
    notes[index].desc = obtainDesc.data;
    const modifyNote = notes[index];
    return res.json({ modifyNote });
  }
  const resultDesc = verifyDesc(desc);

  if (resultDesc.data === null) {
    res.status(400).json({ error: resultDesc.message });
    return;
  }
});

app.delete("/notres/:id", (req, res) => {
  const id = req.params.id;
  const obtainedId = verifyId(id);
  if (obtainedId === null) {
    return res.status(400).json({ message: obtainedId.message });
  }

  if (!notes.find((note) => note.id === obtainedId.data)) {
    return res.status(400).json({ message: obtainedId.mes});
  }
});
//===================================================================================================================================
//Listening server
app.listen(3000, () => {
  console.log(colors.green("Server is Executing in port 3000"));
});
