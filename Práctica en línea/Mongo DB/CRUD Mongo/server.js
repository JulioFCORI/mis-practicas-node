import express from 'express';
import connectDB from "./src/config/database.js";
import TaskRoutes from './src/routes/TaskRoutes.js';
const port = 3000;

const app = express();

connectDB(app);

app.use(express.json());

app.get('/',(req, res) => {
    res.send('Welcome to Tasjs API');
});

app.use('/api',TaskRoutes);

app.listen(port,()=>{
    console.log('Server is running');
});