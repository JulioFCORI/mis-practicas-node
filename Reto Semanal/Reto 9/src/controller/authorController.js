import User from "../models/Author.js"
export const getAuthors = async (req, res) =>{
    try{
        const [row] = await User.getAll();
        res.json(row);
        
    }catch(err){
        console.error(error);
    }
}

export const getAuthorById = async (req, res) => {
    try{
        const {id} = req.params;
        const [row] = await User.getById;
        res.json(row);
        
    }catch(err){
        console.error(error);
    }
}