import Task from "../Task";

export const getTask = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.statis(200).send(tasks);

    }catch(err){
        console.log('Error', err);
        res.status(400).send({error: err});
    }
}

export const createTasks = async (req,res) =>{
    try{
        const task = new Task({description: req.body.description});
        await task.save();
        res.status(201).send(task);
    }catch(err){
        console.log('Error',err);
        res.status(400).send({error: err});
    }
};

export const updateTask = async(req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if(!task){
            res.status(404).send({message: 'Task not found'});
        }
        res.status(200).send(task);
    }catch(err){
        res.status(400).send({error:err});

    }
};

export const deleteTask = async(req, res) => {
    try{
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task){
        res.status(404).send({message:"Task not found"});
    }else{
        res.status(204).send();
    }
    }catch(err){
        res.status(400).send({error:err});
    }
}