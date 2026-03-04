import express from 'express';
import { sequelizeConnection } from './src/config/db.js';
import routes from './src/routes/index.routes.js'

const app = express();
app.use(express.json());


(async () =>{
    try{
        await sequelizeConnection.authenticate();
        await sequelizeConnection.sync({alter: true});
        console.log("Data base connected");
    }catch(error){
        console.error(error);
    }
})();


app.use('/api', routes);

app.listen(300,()=>{
    console.log("Server is running on port: 300");
})