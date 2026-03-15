import User from '../models/User.js';

export const getUsers = async(req,res) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: 'Error en el servidor'});
    }
}

export const createUsers = async(req,res) =>{
    try{
        const {name} = req.body;
        if(!name){
            res.status(400).json({message:'el nombre es requerido'});
        }
        const user = new User(name);
        await user.save();
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({message: 'Error en el servidor'});
    }
}