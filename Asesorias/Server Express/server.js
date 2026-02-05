import express from "express";
import colors from "colors";

const app = express();

let tasks = [
  {
    id: 1,
    desc: "Estudiar",
    status: "done",
  },
  {
    id: 2,
    desc: "Limpiar",
    status: "done",
  },
];

app.use(express.json());

app.get("/", (req, resp) => {
  resp.json({ message: "Hola" });
});

app.get("/api/task", (req, resp) => {
  resp.json({ tasks });
});

app.get("/api/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(tasks[id]);
  console.log(id);
  let task = null;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      task = tasks[i];
      console.log(task);
      console.log(tasks[i].id);
      break;
    }
  }
  //console.log(task);
  return task === null
    ? res.status(404).json({ error: "tarea no encontrada" })
    : res.status(200).json(task);
});

app.post("/api/task/:id", (req, res) => {
  const desc = req.body.desc;

  if (!desc) {
    return res.status(400).json({ error: "descripción requerida" });
  }

  const newTask = {
    id: tasks[tasks.length -1].id + 1,
    desc: desc,
    status: "pending",
  };
  tasks.push(newTask);
  res.status(201).json(tasks);
});

app.put("/api/task/:id", (req, res) => {
  const id = +req.params.id;
  const { desc, status } = req.body;
  const index = tasks.findIndex(t => t.id === id);
   if(index === -1){
   return res.status(404).json({error:"tarea no encontrada"})
   }
   tasks[index].desc=desc;
   tasks[index].status=status;
});


app.delete("api/task/:id",(req, res) => {
    const id = +req.params.id;
    const index = tasks.findIndex(t => t.id === id);
   if(index === -1){
   return res.status(404).json({error:"tarea no encontrada"})}

   tasks.splice(index, 1);
   res.status(204).json(tasks);

})

app.listen(3000, () => {
  console.log(colors.cyan(`aplicación en http://localhost:3000`));
});
