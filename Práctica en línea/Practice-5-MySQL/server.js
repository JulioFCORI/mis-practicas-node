import express from "express";
import mysql from "mysql2/promise";

//Create server with express
const app = express();
app.use(express.json);

//Create conection to Database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Remsita1807@',
    database: 'library'
});

async function test() {
    const [result] = await connection.query('SELECT 1+1 AS result');
    console.log('Conection established',result[0].result);
}

app.get("/books", async (req, res) => {
    
})


test();
