import Task from "../Task";

export const getTask = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);

    }catch(err){
        console.log('Error', err);
    }
}

export const createTasks = async (req,res) =>{
    try{
        const task = new Task({description: req.body.description});
        await task.save();
        res
    }catch{

    }
}