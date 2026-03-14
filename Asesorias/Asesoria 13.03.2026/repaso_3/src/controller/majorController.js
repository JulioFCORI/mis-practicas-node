import { Major } from "../models/index.js";

export const getMajors = async (req, res) => {
    try{
        const majors = await Major.findAll();
        res.status(200).json({majors});
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'internal server error'})

    }
};

export const getMajorById = async (req, res) => {
    const id = req.params.id;
    const major = await Major.findByPk(id);

    if(!major){
        return res.status(404).json("Major not found")
    }
    res.status(200).json(major);
}

export const createMajor = async(req, res) => {
    const name = req.body.name;

    //await Major.create({name});
    //await Major.create(req.body.name)
    if(!name){
        return res.status(400).json({message: 'name is required'});
    }
    const major = new Major();
    major.name = name;
    /*
    proceso intermedio antes de guardar en la DB
    */
    await major.save();
    res.status(201).json();
}