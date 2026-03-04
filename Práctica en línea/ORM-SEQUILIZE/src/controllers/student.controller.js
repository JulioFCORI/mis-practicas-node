import { Student, Student } from "../models/index.js";

export const getStudents = async(req,res)=>{
    try{
        const students = await Student.findAll();
        res.status(200).json(students);
    }catch (error){
        console.log(error);
    }
}


export const getStudentsById = async (req, res)=>{
    try{
        const {id} = req.params;
        const user = await Student.findByPk(Number(id));
        if(!user){
            return res.status(404).json({message: 'user not found'});
        }
        res.status(200).json(user);
    }catch{
        console.log(error);
    }
}

export const createStudent = async (req, res) =>{
    try{
        const {name, semester, major} = req.body;

        const student = Student({name, semester,majorId});
        await student.save();
        res.status(201).json(student);

    }catch (error){
        console.log(error);

    }
}