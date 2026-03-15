import express from 'express';
import jwt from 'jsonwebtoken';
import connectDB from "./src/config/database.js";
import TaskRoutes from './src/routes/TaskRoutes.js';
const port = 3000;

//User data
const user = {
    id:123,
    name:'Ana',
    role:'admin'
};

const token = jwt.sign(usuario, 'clave_secreta',{expiresIn:'1h'});
console.log('Token jwt = ',token);

const validateToken = (() => {
    try{
        const data = jwt.verify(token,'clave_secreta');
        console.log('Token validate: ', data);
    }catch(err){
        console.log('Invalid token',err);

    }
});

const app = express();

connectDB(app);

app.use(express.json());

app.get('/',(req, res) => {
    res.send('Welcome to Tasjs API');
    validateToken();
});

app.use('/api',TaskRoutes);

app.listen(port,()=>{
    console.log('Server is running');
});