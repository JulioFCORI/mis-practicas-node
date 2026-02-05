import express from 'express';
import colors from 'colors';

const app = express();

let tasks = [
    {
        id: 1,
        desc: "Estudiar",
        status: "done"
    },
    {
        id: 2,
        desc: "comer",
        status: "pending"
    },
];

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: 'Hola mundo' });
});

app.get("/api/tasks", (req, res) => {
    res.status(200).json(tasks);
});


app.get("/api/tasks/:id", (req, res) => {
    const id = +req.params.id;

    let task = null;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            task = tasks[i];
            break;
        }
    }

    if (!task) {
        return res.status(404).json({ message: 'no hay nada mi compa' });
    }

    res.status(200).json(task);
});

app.post("/api/tasks", (req, res) => {
    const desc = req.body.desc;

    if (!desc) {
        return res.status(400).json({ error: 'la descripcion es obligatoria' });
    }
    
    const newTask = {
        id: tasks[tasks.length -1].id +1,
        desc: desc,
        status: 'pending'
    }
    tasks.push(newTask);

    res.status(201).json(tasks);
});

app.put("/api/tasks/:id", (req, res) => {
    const id = +req.params.id;
    const { desc, status } = req.body;

    const index = tasks.findIndex(task => task.id === id)

    if (index === -1) {
        return res.status(404).json({ message: 'no hay nada mi compa' });
    }

    tasks[index].desc = desc;
    tasks[index].status = status;

    res.status(200).json({message: 'hiciste un cambio', tasks});

});

app.delete("/api/tasks/:id", (req, res) => {
    const id = +req.params.id;

    const index = tasks.findIndex(task => task.id === id)

    if (index === -1) {
        return res.status(404).json({ message: 'no hay nada mi compa' });
    }

    tasks.splice(index, 1);

    res.status(204).json(tasks);
})

app.listen(3000, () => {
    console.log(colors.yellow(aplicacion en http://localhost:3000));
});